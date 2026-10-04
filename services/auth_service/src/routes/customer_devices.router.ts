import type { FastifyPluginAsync } from 'fastify'
import { CustomerDevicesService } from '../services/cpanel/customer_devices/CustomerDevicesService'

const CustomerDevicesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CustomerDevicesService()

  app.get('/customer_devices', async (request, reply) => {
    const result = await controller.listCustomerDevices(app, request)
    return reply.send(result)
  })
  app.post('/customer_devices', async (request, reply) => {
    const result = await controller.createCustomerDevice(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/customer_devices/:id', async (request, reply) => {
    const result = await controller.getCustomerDevicesById(app, request)
    return reply.send(result)
  })
  app.put('/customer_devices/:id', async (request, reply) => {
    const result = await controller.updateCustomerDevice(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/customer_devices/:id', async (request, reply) => {
    const result = await controller.deleteCustomerDevice(app, request)
    return reply.send(result)
  })
}

export default CustomerDevicesRoutes
