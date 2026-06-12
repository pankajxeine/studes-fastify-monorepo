import type { FastifyPluginAsync } from 'fastify'
import { CustomersService } from '../services/CustomersService'

const CustomersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomersService()
  app.get('/customers', async (request, reply) => {
    return await controller.listCustomers(app, request)
  })
  app.post('/customers', async (request, reply) => {
    return await controller.createCustomer(app, request.body as any, request)
  })
  app.get('/customers/:customerId', async (request, reply) => {
    return await controller.getCustomer(app, request)
  })
  app.patch('/customers/:customerId', async (request, reply) => {
    return await controller.updateCustomer(app, request.body as any, request)
  })
  app.delete('/customers/:customerId', async (request, reply) => {
    await controller.deleteCustomer(app, request)
  })
}

export default CustomersRoutes
