import type { FastifyPluginAsync } from 'fastify'
import { CustomersService } from '../services/CustomersService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const CustomersRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomersService()
  app.get('/customers', async (request, reply) => {
    return await controller.listCustomers(buildHeaders(request))
  })
  app.post('/customers', async (request, reply) => {
    return await controller.createCustomer(request.body as any, buildHeaders(request))
  })
  app.get('/customers/:customerId', async (request, reply) => {
    return await controller.getCustomer(buildHeaders(request))
  })
  app.patch('/customers/:customerId', async (request, reply) => {
    return await controller.updateCustomer(request.body as any, buildHeaders(request))
  })
  app.delete('/customers/:customerId', async (request, reply) => {
    await controller.deleteCustomer(buildHeaders(request))
  })
}

export default CustomersRoutes
