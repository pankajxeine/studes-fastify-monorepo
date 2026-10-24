import type { LoginRequest } from './types/LoginRequest'
import type { LoginResponse } from './types/LoginResponse'
import type { RefreshTokenRequest } from './types/RefreshTokenRequest'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { AuthController } from './AuthController'
import { compare } from 'bcryptjs'
import { z } from 'zod'
import { QueryTypes } from 'sequelize'
import { UnauthorizedError } from '../../core/errors/http-errors'
import type { JwtPayload } from '../../types/JwtPaylaod'
import { escapeIdentifier } from '../../utils/escapeIdentifier'

const loginSchema = z.object({ email: z.string().email().optional(), username: z.string().min(1).optional(), password: z.string().min(1), audience: z.enum(['admin', 'tenant']).default('tenant'), tenant_id: z.string().uuid().optional(), tenant_slug: z.string().min(1).optional() }).refine(value => Boolean(value.email || value.username), { message: 'email or username is required' })
type UserRow = { id: string; email: string; username: string; password_hash: string; first_name: string | null; last_name: string | null; role: string | null; tenant_id: string | null; tenant_slug: string | null; tenant_schema: string | null }
type TenantRow = { id: string; slug: string; schema_name: string }

export class AuthService implements AuthController {
  public async authLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse> {
    const credentials = loginSchema.parse(input)
    if (credentials.audience === 'admin') {
      throw new UnauthorizedError('Use the CRM administrator sign-in endpoint')
    }
    const user = await this.findTenantUser(app, credentials, request)
    if (!user || !(await compare(credentials.password, user.password_hash))) {
      throw new UnauthorizedError('Invalid credentials')
    }

    await this.touchLastLogin(app, user)
    return this.issueTokens(app, user, 'tenant')
  }

  public async authRefresh(app: FastifyInstance, input: RefreshTokenRequest, _request?: FastifyRequest): Promise<LoginResponse> {
    let token: JwtPayload & { tokenType?: string }
    try { token = app.jwt.verify(input.refreshToken) as JwtPayload & { tokenType?: string } } catch { throw new UnauthorizedError('Invalid refresh token') }
    if (token.tokenType !== 'refresh') throw new UnauthorizedError('Invalid refresh token')
    if (token.audience === 'admin') throw new UnauthorizedError('CRM administrator sessions use the secure session refresh endpoint')
    const user = await this.findTenantUserById(app, token)
    if (!user) throw new UnauthorizedError('Identity is no longer active')
    return this.issueTokens(app, user, token.audience)
  }

  public async authLogout(_app: FastifyInstance, _request?: FastifyRequest): Promise<void> { /* stateless JWT logout */ }

  private async findTenantUser(app: FastifyInstance, input: z.infer<typeof loginSchema>, request?: FastifyRequest) {
    const tenant = await this.resolveTenant(app, input, request)
    return this.queryTenantUser(app, tenant, input.email, input.username)
  }

  private async findTenantUserById(app: FastifyInstance, token: JwtPayload) {
    if (!token.tenantId || !token.tenantSlug) return undefined
    const tenants = await app.db!.query<TenantRow>(
      'select id::text, slug, schema_name from public.tenants where id::text = :tenantId and slug = :tenantSlug and status = \'active\' limit 1',
      { replacements: { tenantId: token.tenantId, tenantSlug: token.tenantSlug }, type: QueryTypes.SELECT }
    )
    const tenant = tenants[0]
    if (!tenant?.schema_name) return undefined
    return this.queryTenantUser(app, tenant, undefined, undefined, token.sub)
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

  private async touchLastLogin(app: FastifyInstance, user: UserRow) {
    const schema = escapeIdentifier(user.tenant_schema!)
    await app.db!.query(`update ${schema}.users set last_login = now() where id::text = :id`, { replacements: { id: user.id } })
  }

  private issueTokens(app: FastifyInstance, user: UserRow, audience: 'admin' | 'tenant'): LoginResponse {
    const payload: JwtPayload = { sub: user.id, audience, role: user.role ?? (audience === 'admin' ? 'admin' : 'tenant_user'), ...(audience === 'tenant' ? { tenantId: user.tenant_id!, tenantSlug: user.tenant_slug! } : {}) }
    return { accessToken: app.jwt.sign(payload, { expiresIn: app.env.JWT_EXPIRY }), refreshToken: app.jwt.sign({ ...payload, tokenType: 'refresh' }, { expiresIn: app.env.JWT_REFRESH_EXPIRY }), expiresIn: app.env.JWT_EXPIRY, user: { id: user.id, email: user.email, username: user.username, first_name: user.first_name ?? undefined, last_name: user.last_name ?? undefined, role: payload.role, audience, tenant_id: user.tenant_id ?? undefined, tenant_slug: user.tenant_slug ?? undefined } }
  }
}
