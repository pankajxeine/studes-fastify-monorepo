import type { FastifyPluginAsync } from 'fastify'
import { LifecycleEventService } from '../../services/tenancy/lifecycle_event/LifecycleEventService'

const LifecycleEventRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LifecycleEventService()

  app.get('/lifecycle_event', async (request, reply) => {
    const result = await controller.listLifecycleEvent(app, request)
    return reply.send(result)
  })
  app.post('/lifecycle_event', async (request, reply) => {
    const result = await controller.createLifecycleEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/lifecycle_event/:id', async (request, reply) => {
    const result = await controller.getLifecycleEventById(app, request)
    return reply.send(result)
  })
  app.put('/lifecycle_event/:id', async (request, reply) => {
    const result = await controller.updateLifecycleEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/lifecycle_event/:id', async (request, reply) => {
    const result = await controller.deleteLifecycleEvent(app, request)
    return reply.send(result)
  })
}

export default LifecycleEventRoutes
