import type { FastifyPluginAsync } from 'fastify'
import { HardwareShippingAddressService } from '../services/cpanels/hardware_shipping_address/HardwareShippingAddressService'

const HardwareShippingAddressRoutes: FastifyPluginAsync = async (app) => {
  const controller = new HardwareShippingAddressService()

  app.get('/hardware_shipping_address', async (request, reply) => {
    const result = await controller.listHardwareShippingAddress(app, request)
    return reply.send(result)
  })
  app.post('/hardware_shipping_address', async (request, reply) => {
    const result = await controller.createHardwareShippingAddres(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/hardware_shipping_address/:id', async (request, reply) => {
    const result = await controller.getHardwareShippingAddressById(app, request)
    return reply.send(result)
  })
  app.put('/hardware_shipping_address/:id', async (request, reply) => {
    const result = await controller.updateHardwareShippingAddres(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/hardware_shipping_address/:id', async (request, reply) => {
    const result = await controller.deleteHardwareShippingAddres(app, request)
    return reply.send(result)
  })
}

export default HardwareShippingAddressRoutes
