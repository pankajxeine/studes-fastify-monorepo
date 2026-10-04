import type { FastifyPluginAsync } from 'fastify'
import { TenantOnboardService } from '../services/tenant_onboard/TenantOnboardService'

const TenantOnboardRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TenantOnboardService()

  app.post('/tenants/onboard', async (request, reply) => {
    const result = await controller.onboardTenant(app, request.body as any, request)
    return reply.send(result)
  })
}

export default TenantOnboardRoutes
