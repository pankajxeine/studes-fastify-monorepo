import type { FastifyPluginAsync } from 'fastify'
import { TenantOnboardService } from '../services/TenantOnboardService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const TenantOnboardRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TenantOnboardService()
  app.post('/tenants/onboard', async (request, reply) => {
    return await controller.onboardTenant(request.body as any, buildHeaders(request))
  })
}

export default TenantOnboardRoutes
