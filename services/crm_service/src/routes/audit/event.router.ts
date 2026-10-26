import type { FastifyPluginAsync } from 'fastify'
import { EventService } from '../../services/audit/event/EventService'

const EventRoutes: FastifyPluginAsync = async (app) => {
  const controller = new EventService()

  app.get('/event', { config: {"adminPermission":"audit.event.read"} }, async (request, reply) => {
    const result = await controller.listEvent(app, request)
    return reply.send(result)
  })
  app.post('/event', { config: {"adminPermission":"audit.event.create"} }, async (request, reply) => {
    const result = await controller.createEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/event/:event_id', { config: {"adminPermission":"audit.event.read"} }, async (request, reply) => {
    const result = await controller.getEventById(app, request)
    return reply.send(result)
  })
  app.put('/event/:event_id', { config: {"adminPermission":"audit.event.update"} }, async (request, reply) => {
    const result = await controller.updateEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/event/:event_id', { config: {"adminPermission":"audit.event.delete"} }, async (request, reply) => {
    const result = await controller.deleteEvent(app, request)
    return reply.send(result)
  })
}

export default EventRoutes
