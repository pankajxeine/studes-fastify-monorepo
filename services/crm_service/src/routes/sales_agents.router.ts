import type { FastifyPluginAsync } from 'fastify'
import { SalesAgentsService } from '../services/sales_agents/SalesAgentsService'

const SalesAgentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SalesAgentsService()

  app.get('/sales/agents', async (request, reply) => {
    const result = await controller.listSalesAgents(app, request)
    return reply.send(result)
  })
  app.post('/sales/agents', async (request, reply) => {
    const result = await controller.createSalesAgent(app, request.body as any, request)
    return reply.send(result)
  })
  app.patch('/sales/agents/:agentId', async (request, reply) => {
    const result = await controller.updateSalesAgent(app, request.body as any, request)
    return reply.send(result)
  })
}

export default SalesAgentsRoutes
