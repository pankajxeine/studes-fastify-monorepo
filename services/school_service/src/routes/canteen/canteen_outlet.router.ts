import type { FastifyPluginAsync } from 'fastify'
import { CanteenOutletService } from '../../services/canteen/canteen_outlet/CanteenOutletService'

const CanteenOutletRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CanteenOutletService()

  app.get('/canteen_outlet', async (request, reply) => {
    const result = await controller.listCanteenOutlet(app, request)
    return reply.send(result)
  })
  app.post('/canteen_outlet', async (request, reply) => {
    const result = await controller.createCanteenOutlet(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/canteen_outlet/:id', async (request, reply) => {
    const result = await controller.getCanteenOutletById(app, request)
    return reply.send(result)
  })
  app.put('/canteen_outlet/:id', async (request, reply) => {
    const result = await controller.updateCanteenOutlet(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/canteen_outlet/:id', async (request, reply) => {
    const result = await controller.deleteCanteenOutlet(app, request)
    return reply.send(result)
  })
}

export default CanteenOutletRoutes
