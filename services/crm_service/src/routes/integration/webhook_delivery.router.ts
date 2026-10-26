import type { FastifyPluginAsync } from 'fastify'
import { WebhookDeliveryService } from '../../services/integration/webhook_delivery/WebhookDeliveryService'

const WebhookDeliveryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new WebhookDeliveryService()

  app.get('/webhook_delivery', { config: {"adminPermission":"integration.webhook_delivery.read"} }, async (request, reply) => {
    const result = await controller.listWebhookDelivery(app, request)
    return reply.send(result)
  })
  app.post('/webhook_delivery', { config: {"adminPermission":"integration.webhook_delivery.create"} }, async (request, reply) => {
    const result = await controller.createWebhookDelivery(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/webhook_delivery/:webhook_delivery_id', { config: {"adminPermission":"integration.webhook_delivery.read"} }, async (request, reply) => {
    const result = await controller.getWebhookDeliveryById(app, request)
    return reply.send(result)
  })
  app.put('/webhook_delivery/:webhook_delivery_id', { config: {"adminPermission":"integration.webhook_delivery.update"} }, async (request, reply) => {
    const result = await controller.updateWebhookDelivery(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/webhook_delivery/:webhook_delivery_id', { config: {"adminPermission":"integration.webhook_delivery.delete"} }, async (request, reply) => {
    const result = await controller.deleteWebhookDelivery(app, request)
    return reply.send(result)
  })
}

export default WebhookDeliveryRoutes
