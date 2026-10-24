import type { FastifyPluginAsync } from 'fastify'
import { SalesAgentService } from '../../services/partner/sales_agent/SalesAgentService'

const SalesAgentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SalesAgentService()

  app.get('/sales_agent', async (request, reply) => {
    const result = await controller.listSalesAgent(app, request)
    return reply.send(result)
  })
  app.post('/sales_agent', async (request, reply) => {
    const result = await controller.createSalesAgent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sales_agent/:id', async (request, reply) => {
    const result = await controller.getSalesAgentById(app, request)
    return reply.send(result)
  })
  app.put('/sales_agent/:id', async (request, reply) => {
    const result = await controller.updateSalesAgent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sales_agent/:id', async (request, reply) => {
    const result = await controller.deleteSalesAgent(app, request)
    return reply.send(result)
  })
}

export default SalesAgentRoutes
