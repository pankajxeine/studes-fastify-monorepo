import { randomBytes, createHash } from 'node:crypto'
import { compare, hash } from 'bcryptjs'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import { QueryTypes, type Transaction } from 'sequelize'
import { ForbiddenError, UnauthorizedError } from '../../core/errors/http-errors'
import { escapeIdentifier } from '../../utils/escapeIdentifier'

type AdminRow = {
  app_user_id: string
  username: string
  email: string
  full_name: string
  password_hash: string | null
  status: string
  locked_until: Date | null
  is_mfa_enabled: boolean
  requires_mfa: boolean
}

type SessionRow = { user_session_id: string; app_user_id: string }
type AdminCredentials = { username?: string; email?: string; password: string }

const DUMMY_HASH_PROMISE = hash(randomBytes(32).toString('hex'), 12)
const REFRESH_COOKIE_PATH = '/auth/admin'

export class AdminAuthService {
  async login(app: FastifyInstance, request: FastifyRequest, rawInput: unknown) {
    const input = this.parseCredentials(rawInput)
    const login = (input.email ?? input.username!).trim()
    const schema = this.schema(app)
    const recentFailures = await app.db!.query<{ count: string }>(
      `SELECT count(*)::text AS count FROM ${schema}.iam_login_attempt
        WHERE ip_address = CAST(:ipAddress AS inet) AND NOT is_success
          AND attempted_at > now() - interval '15 minutes'`,
      { replacements: { ipAddress: request.ip } , type: QueryTypes.SELECT }
    )
    if (Number(recentFailures[0]?.count ?? 0) >= 30) {
      throw Object.assign(new Error('Too many sign-in attempts'), { statusCode: 429, code: 'RATE_LIMITED' })
    }
    await app.db!.query(
      `UPDATE ${schema}.iam_app_user SET status = 'active', locked_until = NULL, failed_login_count = 0
        WHERE user_type = 'staff' AND status = 'locked' AND locked_until <= now() AND deleted_at IS NULL`
    )
    const user = await this.findUser(app, login)
    const passwordHash = user?.password_hash ?? await DUMMY_HASH_PROMISE
    const passwordMatches = await compare(input.password, passwordHash).catch(() => false)
    const locked = user?.status === 'locked'
    const active = user?.status === 'active'

    if (!user || !passwordMatches || !active || locked) {
      const failure = !user ? 'unknown_user' : locked ? 'locked' : !active ? 'disabled' : 'bad_password'
      await this.recordAttempt(app, request, user?.app_user_id ?? null, login, false, failure)
      throw new UnauthorizedError('Invalid credentials')
    }

    if (user.is_mfa_enabled || user.requires_mfa) {
      // MFA secrets are held by a KMS/vault reference in iam_mfa_factor. Do not
      // issue a session until a verifier backed by that secret store is wired in.
      await this.recordAttempt(app, request, user.app_user_id, login, false, 'mfa_failed')
      throw new UnauthorizedError('Invalid credentials')
    }

    const refreshToken = randomBytes(32).toString('base64url')
    const tokenHash = this.sha256(refreshToken)
    const absoluteSeconds = this.expiryMilliseconds(app.env.JWT_REFRESH_EXPIRY) / 1000
    const transaction = await app.db!.transaction()
    try {
      const sessions = await app.db!.query<SessionRow>(
        `INSERT INTO ${schema}.iam_user_session
           (app_user_id, token_hash, auth_method, client_type, ip_address, user_agent,
            idle_expires_at, expires_at)
         VALUES (:userId, :tokenHash, 'password', 'web', :ipAddress, :userAgent,
                 LEAST(now() + interval '30 minutes', now() + make_interval(secs => :seconds)),
                 now() + make_interval(secs => :seconds))
         RETURNING user_session_id::text, app_user_id::text`,
        { replacements: { userId: user.app_user_id, tokenHash, ipAddress: request.ip || null,
          userAgent: request.headers['user-agent']?.slice(0, 1000) ?? null, seconds: absoluteSeconds },
          type: QueryTypes.SELECT, transaction }
      )
      await this.recordAttempt(app, request, user.app_user_id, login, true, null, transaction)
      await transaction.commit()
      const session = sessions[0]
      const accessToken = app.jwt.sign(
        { sub: user.app_user_id, audience: 'admin', sid: session.user_session_id },
        { expiresIn: app.env.JWT_EXPIRY, issuer: 'studes-crm', audience: 'crm-admin' }
      )
      return {
        accessToken,
        expiresIn: app.env.JWT_EXPIRY,
        refreshToken,
        user: { id: user.app_user_id, username: user.username, email: user.email, full_name: user.full_name }
      }
    } catch (error) {
      if (!transaction.finished) await transaction.rollback()
      throw error
    }
  }

  async refresh(app: FastifyInstance, request: FastifyRequest) {
    const oldToken = request.cookies?.[app.env.SESSION_COOKIE_NAME]
    if (!oldToken) throw new UnauthorizedError('Refresh session is required')
    const newToken = randomBytes(32).toString('base64url')
    const transaction = await app.db!.transaction()
    try {
      const rows = await app.db!.query<SessionRow>(
        `UPDATE ${this.schema(app)}.iam_user_session s
            SET token_hash = :newHash,
                last_seen_at = now(),
                idle_expires_at = LEAST(s.expires_at, now() + interval '30 minutes')
           FROM ${this.schema(app)}.iam_app_user u
          WHERE s.token_hash = :oldHash
            AND s.app_user_id = u.app_user_id
            AND s.ended_at IS NULL
            AND s.expires_at > now()
            AND s.idle_expires_at > now()
            AND u.status = 'active' AND u.deleted_at IS NULL
            AND (
              (NOT u.is_mfa_enabled AND NOT EXISTS (
                SELECT 1 FROM ${this.schema(app)}.iam_user_role ur
                JOIN ${this.schema(app)}.iam_role r ON r.role_code = ur.role_code
                WHERE ur.app_user_id = u.app_user_id AND ur.revoked_at IS NULL
                  AND now() >= ur.valid_from AND (ur.valid_to IS NULL OR now() < ur.valid_to)
                  AND r.is_active AND (r.requires_mfa OR r.is_privileged)
              )) OR s.mfa_verified_at >= now() - interval '15 minutes'
            )
          RETURNING s.user_session_id::text, s.app_user_id::text`,
        { replacements: { oldHash: this.sha256(oldToken), newHash: this.sha256(newToken) },
          type: QueryTypes.SELECT, transaction }
      )
      if (!rows[0]) throw new UnauthorizedError('Refresh session is invalid or expired')
      await transaction.commit()
      return { accessToken: this.accessToken(app, rows[0]), expiresIn: app.env.JWT_EXPIRY, refreshToken: newToken }
    } catch (error) {
      if (!transaction.finished) await transaction.rollback()
      throw error
    }
  }

  async logout(app: FastifyInstance, request: FastifyRequest) {
    const refreshToken = request.cookies?.[app.env.SESSION_COOKIE_NAME]
    const sid = (request.user as any)?.sid
    if (sid) {
      await app.db!.query(
        `UPDATE ${this.schema(app)}.iam_user_session SET ended_at = now(), end_reason = 'logout'
          WHERE user_session_id = :sid AND ended_at IS NULL`,
        { replacements: { sid } }
      )
    } else if (refreshToken) {
      await app.db!.query(
        `UPDATE ${this.schema(app)}.iam_user_session SET ended_at = now(), end_reason = 'logout'
          WHERE token_hash = :tokenHash AND ended_at IS NULL`,
        { replacements: { tokenHash: this.sha256(refreshToken) } }
      )
    }
  }

  async authenticateRequest(app: FastifyInstance, request: FastifyRequest) {
    const claims = request.user as { sub?: string; sid?: string; audience?: string; iss?: string; aud?: string }
    if (claims.audience !== 'admin' || !claims.sub || !claims.sid || claims.iss !== 'studes-crm' || claims.aud !== 'crm-admin') {
      throw new UnauthorizedError('CRM administrator session is required')
    }
    const sessions = await app.db!.query<SessionRow>(
      `UPDATE ${this.schema(app)}.iam_user_session s
          SET last_seen_at = now(), idle_expires_at = LEAST(s.expires_at, now() + interval '30 minutes')
         FROM ${this.schema(app)}.iam_app_user u
        WHERE s.user_session_id = :sid AND s.app_user_id = :userId
          AND s.ended_at IS NULL AND s.expires_at > now() AND s.idle_expires_at > now()
          AND u.app_user_id = s.app_user_id AND u.status = 'active' AND u.deleted_at IS NULL
          AND (
            (NOT u.is_mfa_enabled AND NOT EXISTS (
              SELECT 1 FROM ${this.schema(app)}.iam_user_role ur
              JOIN ${this.schema(app)}.iam_role r ON r.role_code = ur.role_code
              WHERE ur.app_user_id = u.app_user_id AND ur.revoked_at IS NULL
                AND now() >= ur.valid_from AND (ur.valid_to IS NULL OR now() < ur.valid_to)
                AND r.is_active AND (r.requires_mfa OR r.is_privileged)
            )) OR s.mfa_verified_at >= now() - interval '15 minutes'
          )
        RETURNING s.user_session_id::text, s.app_user_id::text`,
      { replacements: { sid: claims.sid, userId: claims.sub }, type: QueryTypes.SELECT }
    )
    if (!sessions[0]) throw new UnauthorizedError('CRM administrator session is invalid or expired')
    return sessions[0]
  }

  async authorize(app: FastifyInstance, userId: string, permissionCode: string, scopeType = 'global', scopeId: string | null = null) {
    const rows = await app.db!.query<{ allowed: boolean }>(
      `SELECT ${this.schema(app)}.iam_fn_user_has_permission(CAST(:userId AS uuid), :permissionCode, CAST(:scopeType AS core.scope_type), CAST(:scopeId AS uuid)) AS allowed`,
      { replacements: { userId, permissionCode, scopeType, scopeId }, type: QueryTypes.SELECT }
    )
    if (!rows[0]?.allowed) throw new ForbiddenError('Insufficient permission')
  }

  setRefreshCookie(app: FastifyInstance, reply: any, token: string) {
    reply.setCookie(app.env.SESSION_COOKIE_NAME, token, {
      path: REFRESH_COOKIE_PATH,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: Math.floor(this.expiryMilliseconds(app.env.JWT_REFRESH_EXPIRY) / 1000)
    })
  }

  clearRefreshCookie(app: FastifyInstance, reply: any) {
    reply.clearCookie(app.env.SESSION_COOKIE_NAME, { path: REFRESH_COOKIE_PATH, httpOnly: true, sameSite: 'strict' })
  }

  assertBrowserOrigin(app: FastifyInstance, request: FastifyRequest) {
    const origin = request.headers.origin
    if (!origin || app.env.CORS_ORIGIN === '*' || origin !== app.env.CORS_ORIGIN) {
      throw new ForbiddenError('Request origin is not allowed')
    }
  }

  private async findUser(app: FastifyInstance, login: string) {
    const users = await app.db!.query<AdminRow>(
      `SELECT u.app_user_id::text, u.username, u.email::text, u.full_name, u.password_hash,
              u.status::text, u.locked_until, u.is_mfa_enabled,
              EXISTS (
                SELECT 1 FROM ${this.schema(app)}.iam_user_role ur JOIN ${this.schema(app)}.iam_role r ON r.role_code = ur.role_code
                 WHERE ur.app_user_id = u.app_user_id AND ur.revoked_at IS NULL
                   AND now() >= ur.valid_from AND (ur.valid_to IS NULL OR now() < ur.valid_to)
                   AND r.is_active AND (r.requires_mfa OR r.is_privileged)
              ) AS requires_mfa
         FROM ${this.schema(app)}.iam_app_user u
        WHERE u.user_type = 'staff' AND u.deleted_at IS NULL
          AND (lower(u.email::text) = lower(:login) OR lower(u.username) = lower(:login))
        LIMIT 1`,
      { replacements: { login }, type: QueryTypes.SELECT }
    )
    return users[0]
  }

  private async recordAttempt(app: FastifyInstance, request: FastifyRequest, userId: string | null,
    login: string, success: boolean, failureReason: string | null, transaction?: Transaction) {
    await app.db!.query(
      `INSERT INTO ${this.schema(app)}.iam_login_attempt (app_user_id, username_entered, auth_method, is_success, failure_reason, ip_address, user_agent)
       VALUES (:userId, :login, 'password', :success, :failureReason, :ipAddress, :userAgent)`,
      { replacements: { userId, login: login.slice(0, 254), success, failureReason,
        ipAddress: request.ip || null, userAgent: request.headers['user-agent']?.slice(0, 1000) ?? null },
        ...(transaction ? { transaction } : {}) }
    )
  }

  private parseCredentials(input: unknown): AdminCredentials {
    if (!input || typeof input !== 'object') throw new UnauthorizedError('Invalid credentials')
    const value = input as Record<string, unknown>
    const email = typeof value.email === 'string' ? value.email.trim() : undefined
    const username = typeof value.username === 'string' ? value.username.trim() : undefined
    if ((!email && !username) || typeof value.password !== 'string' || value.password.length < 1 || value.password.length > 1024) {
      throw new UnauthorizedError('Invalid credentials')
    }
    return { email, username, password: value.password }
  }

  private accessToken(app: FastifyInstance, session: SessionRow) {
    return app.jwt.sign({ sub: session.app_user_id, audience: 'admin', sid: session.user_session_id },
      { expiresIn: app.env.JWT_EXPIRY, issuer: 'studes-crm', audience: 'crm-admin' })
  }

  private sha256(value: string) { return createHash('sha256').update(value).digest('hex') }

  private schema(app: FastifyInstance) { return escapeIdentifier(app.env.DEFAULT_CPANEL_SCHEMA) }

  private expiryMilliseconds(value: string) {
    const match = /^(\d+)([smhd])$/.exec(value)
    if (!match) throw new Error(`Unsupported JWT_REFRESH_EXPIRY value: ${value}`)
    const factor = { s: 1_000, m: 60_000, h: 3_600_000, d: 86_400_000 }[match[2] as 's' | 'm' | 'h' | 'd']
    return Number(match[1]) * factor
  }
}
