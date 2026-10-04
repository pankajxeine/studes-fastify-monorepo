import type { FastifyPluginAsync } from 'fastify'
import { CustomersService } from '../services/cpanel/customers/CustomersService'

const CustomersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomersService()

  app.get('/customers', async (request, reply) => {
    const result = await controller.listCustomers(app, request)
    return reply.send(result)
  })
  app.post('/customers', async (request, reply) => {
    const result = await controller.createCustomer(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/customers/:id', async (request, reply) => {
    const result = await controller.getCustomersById(app, request)
    return reply.send(result)
  })
  app.put('/customers/:id', async (request, reply) => {
    const result = await controller.updateCustomer(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customers/:id', async (request, reply) => {
    const result = await controller.deleteCustomer(app, request)
    return reply.send(result)
  })
}

export default CustomersRoutes
