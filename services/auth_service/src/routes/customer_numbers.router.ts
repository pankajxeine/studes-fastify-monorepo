import type { FastifyPluginAsync } from 'fastify'
import { CustomerNumbersService } from '../services/cpanels/customer_numbers/CustomerNumbersService'

const CustomerNumbersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerNumbersService()

  app.get('/customer_numbers', async (request, reply) => {
    const result = await controller.listCustomerNumbers(app, request)
    return reply.send(result)
  })
  app.post('/customer_numbers', async (request, reply) => {
    const result = await controller.createCustomerNumber(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/customer_numbers/:id', async (request, reply) => {
    const result = await controller.getCustomerNumbersById(app, request)
    return reply.send(result)
  })
  app.put('/customer_numbers/:id', async (request, reply) => {
    const result = await controller.updateCustomerNumber(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customer_numbers/:id', async (request, reply) => {
    const result = await controller.deleteCustomerNumber(app, request)
    return reply.send(result)
  })
}

export default CustomerNumbersRoutes
