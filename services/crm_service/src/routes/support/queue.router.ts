import type { FastifyPluginAsync } from 'fastify'
import { QueueService } from '../../services/support/queue/QueueService'

const QueueRoutes: FastifyPluginAsync = async (app) => {
  const controller = new QueueService()

  app.get('/queue', { config: {"adminPermission":"support.queue.read"} }, async (request, reply) => {
    const result = await controller.listQueue(app, request)
    return reply.send(result)
  })
  app.post('/queue', { config: {"adminPermission":"support.queue.create"} }, async (request, reply) => {
    const result = await controller.createQueue(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/queue/:queue_id', { config: {"adminPermission":"support.queue.read"} }, async (request, reply) => {
    const result = await controller.getQueueById(app, request)
    return reply.send(result)
  })
  app.put('/queue/:queue_id', { config: {"adminPermission":"support.queue.update"} }, async (request, reply) => {
    const result = await controller.updateQueue(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/queue/:queue_id', { config: {"adminPermission":"support.queue.delete"} }, async (request, reply) => {
    const result = await controller.deleteQueue(app, request)
    return reply.send(result)
  })
}

export default QueueRoutes
