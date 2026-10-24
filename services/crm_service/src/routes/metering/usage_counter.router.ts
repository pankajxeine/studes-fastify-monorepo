import type { FastifyPluginAsync } from 'fastify'
import { UsageCounterService } from '../../services/metering/usage_counter/UsageCounterService'

const UsageCounterRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UsageCounterService()

  app.get('/usage_counter', async (request, reply) => {
    const result = await controller.listUsageCounter(app, request)
    return reply.send(result)
  })
  app.post('/usage_counter', async (request, reply) => {
    const result = await controller.createUsageCounter(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/usage_counter/:id', async (request, reply) => {
    const result = await controller.getUsageCounterById(app, request)
    return reply.send(result)
  })
  app.put('/usage_counter/:id', async (request, reply) => {
    const result = await controller.updateUsageCounter(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/usage_counter/:id', async (request, reply) => {
    const result = await controller.deleteUsageCounter(app, request)
    return reply.send(result)
  })
}

export default UsageCounterRoutes
