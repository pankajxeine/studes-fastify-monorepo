import type { FastifyPluginAsync } from 'fastify'
import { ShippingMethodsService } from '../services/cpanels/shipping_methods/ShippingMethodsService'

const ShippingMethodsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ShippingMethodsService()

  app.get('/shipping_methods', async (request, reply) => {
    const result = await controller.listShippingMethods(app, request)
    return reply.send(result)
  })
  app.post('/shipping_methods', async (request, reply) => {
    const result = await controller.createShippingMethod(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/shipping_methods/:id', async (request, reply) => {
    const result = await controller.getShippingMethodsById(app, request)
    return reply.send(result)
  })
  app.put('/shipping_methods/:id', async (request, reply) => {
    const result = await controller.updateShippingMethod(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/shipping_methods/:id', async (request, reply) => {
    const result = await controller.deleteShippingMethod(app, request)
    return reply.send(result)
  })
}

export default ShippingMethodsRoutes
