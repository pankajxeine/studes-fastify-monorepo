import type { FastifyPluginAsync } from 'fastify'
import { OutboxEventService } from '../../services/integration/outbox_event/OutboxEventService'

const OutboxEventRoutes: FastifyPluginAsync = async (app) => {
  const controller = new OutboxEventService()

  app.get('/outbox_event', { config: {"adminPermission":"integration.outbox_event.read"} }, async (request, reply) => {
    const result = await controller.listOutboxEvent(app, request)
    return reply.send(result)
  })
  app.post('/outbox_event', { config: {"adminPermission":"integration.outbox_event.create"} }, async (request, reply) => {
    const result = await controller.createOutboxEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/outbox_event/:event_id', { config: {"adminPermission":"integration.outbox_event.read"} }, async (request, reply) => {
    const result = await controller.getOutboxEventById(app, request)
    return reply.send(result)
  })
  app.put('/outbox_event/:event_id', { config: {"adminPermission":"integration.outbox_event.update"} }, async (request, reply) => {
    const result = await controller.updateOutboxEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/outbox_event/:event_id', { config: {"adminPermission":"integration.outbox_event.delete"} }, async (request, reply) => {
    const result = await controller.deleteOutboxEvent(app, request)
    return reply.send(result)
  })
}

export default OutboxEventRoutes
