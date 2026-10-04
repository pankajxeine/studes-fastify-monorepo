import type { FastifyPluginAsync } from 'fastify'
import { CustomerSalesAgentsService } from '../services/cpanel/customer_sales_agents/CustomerSalesAgentsService'

const CustomerSalesAgentsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerSalesAgentsService()

  app.get('/customer_sales_agents', async (request, reply) => {
    const result = await controller.listCustomerSalesAgents(app, request)
    return reply.send(result)
  })
  app.post('/customer_sales_agents', async (request, reply) => {
    const result = await controller.createCustomerSalesAgent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/customer_sales_agents/:id', async (request, reply) => {
    const result = await controller.getCustomerSalesAgentsById(app, request)
    return reply.send(result)
  })
  app.put('/customer_sales_agents/:id', async (request, reply) => {
    const result = await controller.updateCustomerSalesAgent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customer_sales_agents/:id', async (request, reply) => {
    const result = await controller.deleteCustomerSalesAgent(app, request)
    return reply.send(result)
  })
}

export default CustomerSalesAgentsRoutes
