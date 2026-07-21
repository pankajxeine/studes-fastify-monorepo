import type { FastifyPluginAsync } from 'fastify'
import { SalesAgentsService } from '../services/cpanel/sales_agents/SalesAgentsService'

const SalesAgentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SalesAgentsService()

  app.get('/sales_agents', async (request, reply) => {

    return await reply.send(controller.listSalesAgents(app, request))
  })
  app.post('/sales_agents', async (request, reply) => {
    return await reply.send(controller.createSalesAgent(app, request.body as any, request))
  })
  app.get('/sales_agents/:id', async (request, reply) => {

    return await reply.send(controller.getSalesAgentsById(app, request))
  })
  app.put('/sales_agents/:id', async (request, reply) => {
    return await reply.send(controller.updateSalesAgent(app, request.body as any, request))
  })
  app.delete('/sales_agents/:id', async (request, reply) => {

    return await reply.send(controller.deleteSalesAgent(app, request))
  })
}

export default SalesAgentsRoutes
