import type { FastifyPluginAsync } from 'fastify'
import { OutletService } from '../../services/payment/outlet/OutletService'

const OutletRoutes: FastifyPluginAsync = async (app) => {
  const controller = new OutletService()

  app.get('/outlet', async (request, reply) => {
    const result = await controller.listOutlet(app, request)
    return reply.send(result)
  })
  app.post('/outlet', async (request, reply) => {
    const result = await controller.createOutlet(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/outlet/:id', async (request, reply) => {
    const result = await controller.getOutletById(app, request)
    return reply.send(result)
  })
  app.put('/outlet/:id', async (request, reply) => {
    const result = await controller.updateOutlet(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/outlet/:id', async (request, reply) => {
    const result = await controller.deleteOutlet(app, request)
    return reply.send(result)
  })
}

export default OutletRoutes
