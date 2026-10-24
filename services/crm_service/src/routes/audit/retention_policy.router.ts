import type { FastifyPluginAsync } from 'fastify'
import { RetentionPolicyService } from '../../services/audit/retention_policy/RetentionPolicyService'

const RetentionPolicyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new RetentionPolicyService()

  app.get('/retention_policy', async (request, reply) => {
    const result = await controller.listRetentionPolicy(app, request)
    return reply.send(result)
  })
  app.post('/retention_policy', async (request, reply) => {
    const result = await controller.createRetentionPolicy(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/retention_policy/:id', async (request, reply) => {
    const result = await controller.getRetentionPolicyById(app, request)
    return reply.send(result)
  })
  app.put('/retention_policy/:id', async (request, reply) => {
    const result = await controller.updateRetentionPolicy(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/retention_policy/:id', async (request, reply) => {
    const result = await controller.deleteRetentionPolicy(app, request)
    return reply.send(result)
  })
}

export default RetentionPolicyRoutes
