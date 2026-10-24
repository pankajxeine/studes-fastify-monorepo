import type { FastifyPluginAsync } from 'fastify'
import { CanteenOrderService } from '../../services/canteen/canteen_order/CanteenOrderService'

const CanteenOrderRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CanteenOrderService()

  app.get('/canteen_order', async (request, reply) => {
    const result = await controller.listCanteenOrder(app, request)
    return reply.send(result)
  })
  app.post('/canteen_order', async (request, reply) => {
    const result = await controller.createCanteenOrder(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/canteen_order/:id', async (request, reply) => {
    const result = await controller.getCanteenOrderById(app, request)
    return reply.send(result)
  })
  app.put('/canteen_order/:id', async (request, reply) => {
    const result = await controller.updateCanteenOrder(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/canteen_order/:id', async (request, reply) => {
    const result = await controller.deleteCanteenOrder(app, request)
    return reply.send(result)
  })
}

export default CanteenOrderRoutes
