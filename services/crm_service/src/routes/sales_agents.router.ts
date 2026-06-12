import type { FastifyPluginAsync } from 'fastify'
import { SalesAgentsService } from '../services/SalesAgentsService'

const SalesAgentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SalesAgentsService()
  app.get('/sales/agents', async (request, reply) => {
    return await controller.listSalesAgents(app, request)
  })
  app.post('/sales/agents', async (request, reply) => {
    return await controller.createSalesAgent(app, request.body as any, request)
  })
  app.patch('/sales/agents/:agentId', async (request, reply) => {
    return await controller.updateSalesAgent(app, request.body as any, request)
  })
}

export default SalesAgentsRoutes
