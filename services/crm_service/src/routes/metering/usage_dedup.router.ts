import type { FastifyPluginAsync } from 'fastify'
import { UsageDedupService } from '../../services/metering/usage_dedup/UsageDedupService'

const UsageDedupRoutes: FastifyPluginAsync = async (app) => {
  const controller = new UsageDedupService()

  app.get('/usage_dedup', async (request, reply) => {
    const result = await controller.listUsageDedup(app, request)
    return reply.send(result)
  })
  app.post('/usage_dedup', async (request, reply) => {
    const result = await controller.createUsageDedup(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/usage_dedup/:id', async (request, reply) => {
    const result = await controller.getUsageDedupById(app, request)
    return reply.send(result)
  })
  app.put('/usage_dedup/:id', async (request, reply) => {
    const result = await controller.updateUsageDedup(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/usage_dedup/:id', async (request, reply) => {
    const result = await controller.deleteUsageDedup(app, request)
    return reply.send(result)
  })
}

export default UsageDedupRoutes
