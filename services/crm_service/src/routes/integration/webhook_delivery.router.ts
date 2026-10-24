import type { FastifyPluginAsync } from 'fastify'
import { WebhookDeliveryService } from '../../services/integration/webhook_delivery/WebhookDeliveryService'

const WebhookDeliveryRoutes: FastifyPluginAsync = async (app) => {
  const controller = new WebhookDeliveryService()

  app.get('/webhook_delivery', async (request, reply) => {
    const result = await controller.listWebhookDelivery(app, request)
    return reply.send(result)
  })
  app.post('/webhook_delivery', async (request, reply) => {
    const result = await controller.createWebhookDelivery(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/webhook_delivery/:id', async (request, reply) => {
    const result = await controller.getWebhookDeliveryById(app, request)
    return reply.send(result)
  })
  app.put('/webhook_delivery/:id', async (request, reply) => {
    const result = await controller.updateWebhookDelivery(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/webhook_delivery/:id', async (request, reply) => {
    const result = await controller.deleteWebhookDelivery(app, request)
    return reply.send(result)
  })
}

export default WebhookDeliveryRoutes
