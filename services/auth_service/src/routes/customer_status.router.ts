import type { FastifyPluginAsync } from 'fastify'
import { CustomerStatusService } from '../services/cpanel/customer_status/CustomerStatusService'

const CustomerStatusRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerStatusService()

  app.get('/customer_status', async (request, reply) => {
    const result = await controller.listCustomerStatus(app, request)
    return reply.send(result)
  })
  app.post('/customer_status', async (request, reply) => {
    const result = await controller.createCustomerStatu(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/customer_status/:id', async (request, reply) => {
    const result = await controller.getCustomerStatusById(app, request)
    return reply.send(result)
  })
  app.put('/customer_status/:id', async (request, reply) => {
    const result = await controller.updateCustomerStatu(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customer_status/:id', async (request, reply) => {
    const result = await controller.deleteCustomerStatu(app, request)
    return reply.send(result)
  })
}

export default CustomerStatusRoutes
