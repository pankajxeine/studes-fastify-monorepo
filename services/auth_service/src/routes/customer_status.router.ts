import type { FastifyPluginAsync } from 'fastify'
import { CustomerStatusService } from '../services/cpanel/customer_status/CustomerStatusService'

const CustomerStatusRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerStatusService()

  app.get('/customer_status', async (request, reply) => {

    return await reply.send(controller.listCustomerStatus(app, request))
  })
  app.post('/customer_status', async (request, reply) => {
    return await reply.send(controller.createCustomerStatu(app, request.body as any, request))
  })
  app.get('/customer_status/:id', async (request, reply) => {

    return await reply.send(controller.getCustomerStatusById(app, request))
  })
  app.put('/customer_status/:id', async (request, reply) => {
    return await reply.send(controller.updateCustomerStatu(app, request.body as any, request))
  })
  app.delete('/customer_status/:id', async (request, reply) => {

    return await reply.send(controller.deleteCustomerStatu(app, request))
  })
}

export default CustomerStatusRoutes
