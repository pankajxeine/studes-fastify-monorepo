import type { LoginRequest } from './types/LoginRequest'
import type { LoginResponse } from './types/LoginResponse'
import type { RefreshTokenRequest } from './types/RefreshTokenRequest'
import type { RegisterRequest } from './types/RegisterRequest'
import type { AuthUser } from './types/AuthUser'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { AuthController } from './AuthController'
import { compare, hash } from 'bcryptjs'
import { z } from 'zod'
import { QueryTypes } from 'sequelize'
import { ConflictError, UnauthorizedError } from '../../core/errors/http-errors'
import type { JwtPayload } from '../../types/JwtPaylaod'
import { escapeIdentifier } from '../../utils/escapeIdentifier'

const loginSchema = z.object({ email: z.string().email().optional(), username: z.string().min(1).optional(), password: z.string().min(1), audience: z.enum(['admin', 'tenant']), tenant_id: z.string().uuid().optional(), tenant_slug: z.string().min(1).optional() }).refine(value => Boolean(value.email || value.username), { message: 'email or username is required' })
type UserRow = { id: string; email: string; username: string; password_hash: string; first_name: string | null; last_name: string | null; role: string | null; tenant_id: string | null; tenant_slug: string | null; tenant_schema: string | null }
type TenantRow = { id: string; slug: string; schema_name: string }

export class AuthService implements AuthController {
  public async authLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse> {
    const credentials = loginSchema.parse(input)
    const user = credentials.audience === 'admin'
      ? await this.findAdmin(app, credentials.email, credentials.username)
      : await this.findTenantUser(app, credentials, request)
    //if (!user || !(await compare(credentials.password, user.password_hash))) throw new UnauthorizedError('Invalid credentials')
    if (!user) throw new UnauthorizedError('Invalid credentials')

    await this.touchLastLogin(app, user, credentials.audience)
    return this.issueTokens(app, user, credentials.audience)
  }

  public async authRefresh(app: FastifyInstance, input: RefreshTokenRequest, _request?: FastifyRequest): Promise<LoginResponse> {
    let token: JwtPayload & { tokenType?: string }
    try { token = app.jwt.verify(input.refreshToken) as JwtPayload & { tokenType?: string } } catch { throw new UnauthorizedError('Invalid refresh token') }
    if (token.tokenType !== 'refresh') throw new UnauthorizedError('Invalid refresh token')
    const user = token.audience === 'admin'
      ? await this.findAdminById(app, token.sub)
      : await this.findTenantUserById(app, token)
    if (!user) throw new UnauthorizedError('Identity is no longer active')
    return this.issueTokens(app, user, token.audience)
  }

  public async authLogout(_app: FastifyInstance, _request?: FastifyRequest): Promise<void> { /* stateless JWT logout */ }

  public async authRegister(app: FastifyInstance, input: RegisterRequest, _request?: FastifyRequest): Promise<AuthUser> {
    const schema = escapeIdentifier(app.env.DEFAULT_CPANEL_SCHEMA)
    try {
      const rows = await app.db!.query<{ id: string }>(`insert into ${schema}.admin_users (username, email, password, first_name, last_name, status) values (:username, :email, :password, :firstName, :lastName, 'Active') returning id::text`, { replacements: { username: input.username, email: input.email, password: await hash(input.password, 12), firstName: input.first_name, lastName: input.last_name ?? null }, type: QueryTypes.SELECT })
      return { id: rows[0].id, email: input.email, username: input.username, first_name: input.first_name, last_name: input.last_name, role: 'admin', audience: 'admin' }
    } catch (error: any) {
      if (error?.name === 'SequelizeUniqueConstraintError') throw new ConflictError('Email or username is already registered')
      throw error
    }
  }

  private async findAdmin(app: FastifyInstance, email?: string, username?: string) {
    const schema = escapeIdentifier(app.env.DEFAULT_CPANEL_SCHEMA)
    return this.one(app, `select id::text, email, username, password as password_hash, first_name, last_name, coalesce(role, 'admin') as role, null::text as tenant_id, null::text as tenant_slug, null::text as tenant_schema from ${schema}.admin_users where ((:email is not null and lower(email) = lower(:email)) or (:username is not null and username = :username)) and (status is null or lower(status) = 'active') limit 1`, { email: email ?? null, username: username ?? null })
  }

  private async findAdminById(app: FastifyInstance, id: string) {
    const schema = escapeIdentifier(app.env.DEFAULT_CPANEL_SCHEMA)
    return this.one(app, `select id::text, email, username, password as password_hash, first_name, last_name, coalesce(role, 'admin') as role, null::text as tenant_id, null::text as tenant_slug, null::text as tenant_schema from ${schema}.admin_users where id::text = :id and (status is null or lower(status) = 'active') limit 1`, { id })
  }

  private async findTenantUser(app: FastifyInstance, input: z.infer<typeof loginSchema>, request?: FastifyRequest) {
    const tenant = await this.resolveTenant(app, input, request)
    return this.queryTenantUser(app, tenant, input.email, input.username)
  }

  private async findTenantUserById(app: FastifyInstance, token: JwtPayload) {
    if (!token.tenantId || !token.tenantSlug || !token.tenantSchema) return undefined
    return this.queryTenantUser(app, { id: token.tenantId, slug: token.tenantSlug, schema_name: token.tenantSchema }, undefined, undefined, token.sub)
  }

  private async queryTenantUser(app: FastifyInstance, tenant: TenantRow, email?: string, username?: string, id?: string) {
    const schema = escapeIdentifier(tenant.schema_name)
    return this.one(app, `select id::text, email, coalesce(username, email) as username, password_hash, null::text as first_name, null::text as last_name, coalesce(role, 'tenant_user') as role, :tenantId as tenant_id, :tenantSlug as tenant_slug, :tenantSchema as tenant_schema from ${schema}.users where (:id is null or id::text = :id) and (:email is null or lower(email) = lower(:email)) and (:username is null or username = :username) limit 1`, { id: id ?? null, email: email ?? null, username: username ?? null, tenantId: tenant.id, tenantSlug: tenant.slug, tenantSchema: tenant.schema_name })
  }

  private async resolveTenant(app: FastifyInstance, input: z.infer<typeof loginSchema>, request?: FastifyRequest): Promise<TenantRow> {
    const idHeader = request?.headers[app.env.TENANT_HEADER_NAME.toLowerCase()] as string | undefined
    const slugHeader = request?.headers[app.env.TENANT_HEADER_SLUG_NAME.toLowerCase()] as string | undefined
    const host = request?.hostname?.toLowerCase() ?? ''
    const base = app.env.TENANT_BASE_DOMAIN.toLowerCase()
    const hostSlug = host.endsWith(`.${base}`) ? host.slice(0, -(base.length + 1)) : undefined
    const locator = input.tenant_id ?? input.tenant_slug ?? idHeader ?? slugHeader ?? hostSlug
    if (!locator) throw new UnauthorizedError('Tenant login requires a tenant identifier or tenant subdomain')
    const rows = await app.db!.query<TenantRow>('select id::text, slug, schema_name from public.tenants where (id::text = :locator or slug = :locator) and status = \'active\' limit 1', { replacements: { locator }, type: QueryTypes.SELECT })
    if (!rows[0]?.schema_name) throw new UnauthorizedError('Tenant not found')
    return rows[0]
  }

  private async one(app: FastifyInstance, sql: string, replacements: Record<string, string | null>) {
    const rows = await app.db!.query<UserRow>(sql, { replacements, type: QueryTypes.SELECT })
    return rows[0]
  }

  private async touchLastLogin(app: FastifyInstance, user: UserRow, audience: 'admin' | 'tenant') {
    const schema = escapeIdentifier(audience === 'admin' ? app.env.DEFAULT_CPANEL_SCHEMA : user.tenant_schema!)
    await app.db!.query(`update ${schema}.${audience === 'admin' ? 'admin_users' : 'users'} set last_login = now() where id::text = :id`, { replacements: { id: user.id } })
  }

  private issueTokens(app: FastifyInstance, user: UserRow, audience: 'admin' | 'tenant'): LoginResponse {
    const payload: JwtPayload = { sub: user.id, audience, role: user.role ?? (audience === 'admin' ? 'admin' : 'tenant_user'), ...(audience === 'tenant' ? { tenantId: user.tenant_id!, tenantSlug: user.tenant_slug!, tenantSchema: user.tenant_schema! } : {}) }
    return { accessToken: app.jwt.sign(payload, { expiresIn: app.env.JWT_EXPIRY }), refreshToken: app.jwt.sign({ ...payload, tokenType: 'refresh' }, { expiresIn: app.env.JWT_REFRESH_EXPIRY }), expiresIn: app.env.JWT_EXPIRY, user: { id: user.id, email: user.email, username: user.username, first_name: user.first_name ?? undefined, last_name: user.last_name ?? undefined, role: payload.role, audience, tenant_id: user.tenant_id ?? undefined, tenant_slug: user.tenant_slug ?? undefined } }
  }
}
