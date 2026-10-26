import fp from 'fastify-plugin'
import { z } from 'zod'
import type { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify'
import { ForbiddenError, UnauthorizedError } from '../core/errors/http-errors'
import { jwtAuthGuard } from '../core/middleware/jwtAuth'
import { AdminAuthService } from '../services/auth/AdminAuthService'

const adminRouteConfigSchema = z.object({
  isPublic: z.boolean().optional().default(false),
  adminPermission: z.string().min(1).optional(),
  adminRequiredRole: z.string().min(1).optional(),
  adminScopeType: z.enum(['global', 'legal_entity', 'branch', 'territory', 'application', 'tenant']).optional(),
  adminScopeIdParam: z.string().min(1).optional(),
})

type AdminPermissionGrant = {
  code: string
  scopeType: string
  scopeId: string | null
}

type AdminTokenClaims = {
  sub?: string
  sid?: string
  audience?: string
  roles?: unknown
  permissions?: unknown
}

async function authenticateAdminRequest(
  request: FastifyRequest,
  reply: FastifyReply,
  auth: AdminAuthService,
) {
  await jwtAuthGuard(request, reply)

  const claims = request.user as AdminTokenClaims
  if (claims?.audience !== 'admin') {
    throw new UnauthorizedError('This service only accepts CRM administrator sessions')
  }

  await auth.authenticateRequest(request.server, request)
  return claims
}

function authorizeAdminRequest(
  request: FastifyRequest,
  claims: AdminTokenClaims,
  config: z.infer<typeof adminRouteConfigSchema>,
) {
  const permission = config.adminPermission
  if (!permission) {
    throw new ForbiddenError('Route is missing CRM authorization metadata')
  }

  if (!Array.isArray(claims.roles) || !Array.isArray(claims.permissions)) {
    throw new UnauthorizedError('CRM authorization claims are missing or invalid')
  }
  if (config.adminRequiredRole && !claims.roles.includes(config.adminRequiredRole)) {
    throw new ForbiddenError('Required CRM administrator role is missing')
  }

  const scopeType = config.adminScopeType ?? 'global'
  const scopeId = config.adminScopeIdParam
    ? (request.params as Record<string, string | undefined> | undefined)?.[config.adminScopeIdParam]
    : undefined

  if (scopeType === 'global' && scopeId) {
    throw new ForbiddenError('Global permissions cannot include a scope ID')
  }
  if (scopeType !== 'global' && !scopeId) {
    throw new ForbiddenError('A scope ID is required for this route')
  }

  const allowed = (claims.permissions as AdminPermissionGrant[]).some((grant) =>
    grant && grant.code === permission && (
      (grant.scopeType === 'global' && grant.scopeId === null) ||
      (grant.scopeType === scopeType && grant.scopeId === (scopeId ?? null))
    )
  )

  if (!allowed) throw new ForbiddenError('Insufficient permission')
}

export default fp(async (app) => {
  const adminAuth = new AdminAuthService()
  app.decorateRequest('userType', null)

  app.addHook('onRequest', async (request, reply) => {
    const config = adminRouteConfigSchema.parse(request.routeOptions.config ?? {})
    if (config.isPublic) return

    const claims = await authenticateAdminRequest(request, reply, adminAuth)
    request.userType = 'admin'
    authorizeAdminRequest(request, claims, config)
  })
})

declare module 'fastify' {
  interface FastifyRequest {
    userType: 'admin' | null
  }

  interface FastifyRouteConfig {
    isPublic?: boolean
    /** Database permission code embedded into the access token at login. */
    adminPermission?: string
    /** Additional role requirement for high privilege control-plane routes. */
    adminRequiredRole?: string
    /** Permission scope; global by default. */
    adminScopeType?: 'global' | 'legal_entity' | 'branch' | 'territory' | 'application' | 'tenant'
    /** Route parameter containing the non-global scope UUID. */
    adminScopeIdParam?: string
  }
}
