import type { FastifyPluginAsync } from 'fastify'
import { IdempotencyKeyService } from '../../services/integration/idempotency_key/IdempotencyKeyService'

const IdempotencyKeyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IdempotencyKeyService()

  app.get('/idempotency_key', async (request, reply) => {
    const result = await controller.listIdempotencyKey(app, request)
    return reply.send(result)
  })
  app.post('/idempotency_key', async (request, reply) => {
    const result = await controller.createIdempotencyKey(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/idempotency_key/:id', async (request, reply) => {
    const result = await controller.getIdempotencyKeyById(app, request)
    return reply.send(result)
  })
  app.put('/idempotency_key/:id', async (request, reply) => {
    const result = await controller.updateIdempotencyKey(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/idempotency_key/:id', async (request, reply) => {
    const result = await controller.deleteIdempotencyKey(app, request)
    return reply.send(result)
  })
}

export default IdempotencyKeyRoutes
