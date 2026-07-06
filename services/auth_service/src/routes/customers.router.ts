import type { FastifyPluginAsync } from 'fastify'
import { CustomersService } from '../services/cpanel/customers/CustomersService'

const CustomersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomersService()

  app.get('/customers', async (request, reply) => {
    
    return await reply.send(controller.listCustomers(app, request))
  })
  app.post('/customers', async (request, reply) => {
    return await reply.send(controller.createCustomer(app, request.body as any, request))
  })
  app.get('/customers/:id', async (request, reply) => {
    
    return await reply.send(controller.getCustomersById(app, request))
  })
  app.put('/customers/:id', async (request, reply) => {
    return await reply.send(controller.updateCustomer(app, request.body as any, request))
  })
  app.delete('/customers/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteCustomer(app, request))
  })
}

export default CustomersRoutes
