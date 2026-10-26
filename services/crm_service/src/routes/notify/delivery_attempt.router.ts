import type { FastifyPluginAsync } from 'fastify'
import { DeliveryAttemptService } from '../../services/notify/delivery_attempt/DeliveryAttemptService'

const DeliveryAttemptRoutes: FastifyPluginAsync = async (app) => {
  const controller = new DeliveryAttemptService()

  app.get('/delivery_attempt', { config: {"adminPermission":"notify.delivery_attempt.read"} }, async (request, reply) => {
    const result = await controller.listDeliveryAttempt(app, request)
    return reply.send(result)
  })
  app.post('/delivery_attempt', { config: {"adminPermission":"notify.delivery_attempt.create"} }, async (request, reply) => {
    const result = await controller.createDeliveryAttempt(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/delivery_attempt/:delivery_attempt_id', { config: {"adminPermission":"notify.delivery_attempt.read"} }, async (request, reply) => {
    const result = await controller.getDeliveryAttemptById(app, request)
    return reply.send(result)
  })
  app.put('/delivery_attempt/:delivery_attempt_id', { config: {"adminPermission":"notify.delivery_attempt.update"} }, async (request, reply) => {
    const result = await controller.updateDeliveryAttempt(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/delivery_attempt/:delivery_attempt_id', { config: {"adminPermission":"notify.delivery_attempt.delete"} }, async (request, reply) => {
    const result = await controller.deleteDeliveryAttempt(app, request)
    return reply.send(result)
  })
}

export default DeliveryAttemptRoutes
