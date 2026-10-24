import type { FastifyPluginAsync } from 'fastify'
import { CanteenOrderStatusHistoryService } from '../../services/canteen/canteen_order_status_history/CanteenOrderStatusHistoryService'

const CanteenOrderStatusHistoryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CanteenOrderStatusHistoryService()

  app.get('/canteen_order_status_history', async (request, reply) => {
    const result = await controller.listCanteenOrderStatusHistory(app, request)
    return reply.send(result)
  })
  app.post('/canteen_order_status_history', async (request, reply) => {
    const result = await controller.createCanteenOrderStatusHistory(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/canteen_order_status_history/:id', async (request, reply) => {
    const result = await controller.getCanteenOrderStatusHistoryById(app, request)
    return reply.send(result)
  })
  app.put('/canteen_order_status_history/:id', async (request, reply) => {
    const result = await controller.updateCanteenOrderStatusHistory(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/canteen_order_status_history/:id', async (request, reply) => {
    const result = await controller.deleteCanteenOrderStatusHistory(app, request)
    return reply.send(result)
  })
}

export default CanteenOrderStatusHistoryRoutes
