import type { FastifyPluginAsync } from 'fastify'
import { CustomerNumbersService } from '../services/customer_numbers/CustomerNumbersService'

const CustomerNumbersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerNumbersService()
  app.get('/customer_numbers', async (request, reply) => {
     return await reply.send(controller.listCustomerNumbers(app, request))
  })
  app.post('/customer_numbers', async (request, reply) => {
     return await reply.send(controller.createCustomerNumber(app, request.body as any, request))
  })
  app.get('/customer_numbers/:id', async (request, reply) => {
     return await reply.send(controller.getCustomerNumbersById(app, request))
  })
  app.put('/customer_numbers/:id', async (request, reply) => {
     return await reply.send(controller.updateCustomerNumber(app, request.body as any, request))
  })
  app.delete('/customer_numbers/:id', async (request, reply) => {
      await controller.deleteCustomerNumber(app, request) 

             reply.code(201) 
          
  })
}

export default CustomerNumbersRoutes
