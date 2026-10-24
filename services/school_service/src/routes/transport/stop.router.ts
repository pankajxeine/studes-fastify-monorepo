import type { FastifyPluginAsync } from 'fastify'
import { StopService } from '../../services/transport/stop/StopService'

const StopRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StopService()

  app.get('/stop', async (request, reply) => {
    const result = await controller.listStop(app, request)
    return reply.send(result)
  })
  app.post('/stop', async (request, reply) => {
    const result = await controller.createStop(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/stop/:id', async (request, reply) => {
    const result = await controller.getStopById(app, request)
    return reply.send(result)
  })
  app.put('/stop/:id', async (request, reply) => {
    const result = await controller.updateStop(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/stop/:id', async (request, reply) => {
    const result = await controller.deleteStop(app, request)
    return reply.send(result)
  })
}

export default StopRoutes
