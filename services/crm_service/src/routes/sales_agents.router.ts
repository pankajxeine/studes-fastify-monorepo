import type { FastifyPluginAsync } from 'fastify'
import { SalesAgentsService } from '../services/SalesAgentsService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const SalesAgentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SalesAgentsService()
  app.get('/sales/agents', async (request, reply) => {
    return await controller.listSalesAgents(buildHeaders(request))
  })
  app.post('/sales/agents', async (request, reply) => {
    return await controller.createSalesAgent(request.body as any, buildHeaders(request))
  })
  app.patch('/sales/agents/:agentId', async (request, reply) => {
    return await controller.updateSalesAgent(request.body as any, buildHeaders(request))
  })
}

export default SalesAgentsRoutes
