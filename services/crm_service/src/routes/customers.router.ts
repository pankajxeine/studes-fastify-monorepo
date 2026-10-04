import type { FastifyPluginAsync } from 'fastify'
import { CustomersService } from '../services/customers/CustomersService'

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
  app.get('/customers/:customerId', async (request, reply) => {
    const result = await controller.getCustomer(app, request)
    return reply.send(result)
  })
  app.patch('/customers/:customerId', async (request, reply) => {
    const result = await controller.updateCustomer(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customers/:customerId', async (request, reply) => {
    const result = await controller.deleteCustomer(app, request)
    return reply.send(result)
  })
}

export default CustomersRoutes
