import type { FastifyPluginAsync } from 'fastify'
import { CustomerDiscountsService } from '../services/cpanel/customer_discounts/CustomerDiscountsService'

const CustomerDiscountsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerDiscountsService()

  app.get('/customer_discounts', async (request, reply) => {
    
    return await reply.send(controller.listCustomerDiscounts(app, request))
  })
  app.post('/customer_discounts', async (request, reply) => {
    return await reply.send(controller.createCustomerDiscount(app, request.body as any, request))
  })
  app.get('/customer_discounts/:id', async (request, reply) => {
    
    return await reply.send(controller.getCustomerDiscountsById(app, request))
  })
  app.put('/customer_discounts/:id', async (request, reply) => {
    return await reply.send(controller.updateCustomerDiscount(app, request.body as any, request))
  })
  app.delete('/customer_discounts/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteCustomerDiscount(app, request))
  })
}

export default CustomerDiscountsRoutes
