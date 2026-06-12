import type { FastifyPluginAsync } from 'fastify'
import { HealthService } from '../services/HealthService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const HealthRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HealthService()
  app.get('/health', async (request, reply) => {
    return await controller.authHealth(buildHeaders(request))
  })
  app.get('/health/db', async (request, reply) => {
    return await controller.authHealthDb(buildHeaders(request))
  })
}

export default HealthRoutes
