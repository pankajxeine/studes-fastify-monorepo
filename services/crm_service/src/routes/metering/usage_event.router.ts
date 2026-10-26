import type { FastifyPluginAsync } from 'fastify'
import { UsageEventService } from '../../services/metering/usage_event/UsageEventService'

const UsageEventRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UsageEventService()

  app.get('/usage_event', { config: {"adminPermission":"metering.usage_event.read"} }, async (request, reply) => {
    const result = await controller.listUsageEvent(app, request)
    return reply.send(result)
  })
  app.post('/usage_event', { config: {"adminPermission":"metering.usage_event.create"} }, async (request, reply) => {
    const result = await controller.createUsageEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/usage_event/:usage_event_id', { config: {"adminPermission":"metering.usage_event.read"} }, async (request, reply) => {
    const result = await controller.getUsageEventById(app, request)
    return reply.send(result)
  })
  app.put('/usage_event/:usage_event_id', { config: {"adminPermission":"metering.usage_event.update"} }, async (request, reply) => {
    const result = await controller.updateUsageEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/usage_event/:usage_event_id', { config: {"adminPermission":"metering.usage_event.delete"} }, async (request, reply) => {
    const result = await controller.deleteUsageEvent(app, request)
    return reply.send(result)
  })
}

export default UsageEventRoutes
