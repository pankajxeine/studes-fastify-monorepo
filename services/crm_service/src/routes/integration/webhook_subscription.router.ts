import type { FastifyPluginAsync } from 'fastify'
import { WebhookSubscriptionService } from '../../services/integration/webhook_subscription/WebhookSubscriptionService'

const WebhookSubscriptionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new WebhookSubscriptionService()

  app.get('/webhook_subscription', async (request, reply) => {
    const result = await controller.listWebhookSubscription(app, request)
    return reply.send(result)
  })
  app.post('/webhook_subscription', async (request, reply) => {
    const result = await controller.createWebhookSubscription(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/webhook_subscription/:id', async (request, reply) => {
    const result = await controller.getWebhookSubscriptionById(app, request)
    return reply.send(result)
  })
  app.put('/webhook_subscription/:id', async (request, reply) => {
    const result = await controller.updateWebhookSubscription(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/webhook_subscription/:id', async (request, reply) => {
    const result = await controller.deleteWebhookSubscription(app, request)
    return reply.send(result)
  })
}

export default WebhookSubscriptionRoutes
