import type { FastifyPluginAsync } from 'fastify'
import { CustomerDiscountsService } from '../services/cpanel/customer_discounts/CustomerDiscountsService'

const CustomerDiscountsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerDiscountsService()

  app.get('/customer_discounts', async (request, reply) => {
    const result = await controller.listCustomerDiscounts(app, request)
    return reply.send(result)
  })
  app.post('/customer_discounts', async (request, reply) => {
    const result = await controller.createCustomerDiscount(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/customer_discounts/:id', async (request, reply) => {
    const result = await controller.getCustomerDiscountsById(app, request)
    return reply.send(result)
  })
  app.put('/customer_discounts/:id', async (request, reply) => {
    const result = await controller.updateCustomerDiscount(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customer_discounts/:id', async (request, reply) => {
    const result = await controller.deleteCustomerDiscount(app, request)
    return reply.send(result)
  })
}

export default CustomerDiscountsRoutes
