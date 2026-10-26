import type { FastifyPluginAsync } from 'fastify'
import { LifecycleEventService } from '../../services/tenancy/lifecycle_event/LifecycleEventService'

const LifecycleEventRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LifecycleEventService()

  app.get('/lifecycle_event', { config: {"adminPermission":"tenancy.lifecycle_event.read"} }, async (request, reply) => {
    const result = await controller.listLifecycleEvent(app, request)
    return reply.send(result)
  })
  app.post('/lifecycle_event', { config: {"adminPermission":"tenancy.lifecycle_event.create"} }, async (request, reply) => {
    const result = await controller.createLifecycleEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/lifecycle_event/:lifecycle_event_id', { config: {"adminPermission":"tenancy.lifecycle_event.read"} }, async (request, reply) => {
    const result = await controller.getLifecycleEventById(app, request)
    return reply.send(result)
  })
  app.put('/lifecycle_event/:lifecycle_event_id', { config: {"adminPermission":"tenancy.lifecycle_event.update"} }, async (request, reply) => {
    const result = await controller.updateLifecycleEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/lifecycle_event/:lifecycle_event_id', { config: {"adminPermission":"tenancy.lifecycle_event.delete"} }, async (request, reply) => {
    const result = await controller.deleteLifecycleEvent(app, request)
    return reply.send(result)
  })
}

export default LifecycleEventRoutes
