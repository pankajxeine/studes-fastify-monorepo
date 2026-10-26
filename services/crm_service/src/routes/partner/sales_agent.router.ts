import type { FastifyPluginAsync } from 'fastify'
import { SalesAgentService } from '../../services/partner/sales_agent/SalesAgentService'

const SalesAgentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SalesAgentService()

  app.get('/sales_agent', { config: {"adminPermission":"partner.sales_agent.read"} }, async (request, reply) => {
    const result = await controller.listSalesAgent(app, request)
    return reply.send(result)
  })
  app.post('/sales_agent', { config: {"adminPermission":"partner.sales_agent.create"} }, async (request, reply) => {
    const result = await controller.createSalesAgent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sales_agent/:sales_agent_id', { config: {"adminPermission":"partner.sales_agent.read"} }, async (request, reply) => {
    const result = await controller.getSalesAgentById(app, request)
    return reply.send(result)
  })
  app.put('/sales_agent/:sales_agent_id', { config: {"adminPermission":"partner.sales_agent.update"} }, async (request, reply) => {
    const result = await controller.updateSalesAgent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sales_agent/:sales_agent_id', { config: {"adminPermission":"partner.sales_agent.delete"} }, async (request, reply) => {
    const result = await controller.deleteSalesAgent(app, request)
    return reply.send(result)
  })
}

export default SalesAgentRoutes
