import type { FastifyPluginAsync } from 'fastify'
import { UsageEventService } from '../../services/metering/usage_event/UsageEventService'

const UsageEventRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UsageEventService()

  app.get('/usage_event', async (request, reply) => {
    const result = await controller.listUsageEvent(app, request)
    return reply.send(result)
  })
  app.post('/usage_event', async (request, reply) => {
    const result = await controller.createUsageEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/usage_event/:id', async (request, reply) => {
    const result = await controller.getUsageEventById(app, request)
    return reply.send(result)
  })
  app.put('/usage_event/:id', async (request, reply) => {
    const result = await controller.updateUsageEvent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/usage_event/:id', async (request, reply) => {
    const result = await controller.deleteUsageEvent(app, request)
    return reply.send(result)
  })
}

export default UsageEventRoutes
