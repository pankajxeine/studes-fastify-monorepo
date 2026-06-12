import type { FastifyPluginAsync } from 'fastify'
import { TenantOnboardService } from '../services/TenantOnboardService'

const TenantOnboardRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TenantOnboardService()
  app.post('/tenants/onboard', async (request, reply) => {
    return await controller.onboardTenant(app, request.body as any, request)
  })
}

export default TenantOnboardRoutes
