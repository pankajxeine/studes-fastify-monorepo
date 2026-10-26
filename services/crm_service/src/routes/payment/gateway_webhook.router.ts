import type { FastifyPluginAsync } from 'fastify'
import { GatewayWebhookService } from '../../services/payment/gateway_webhook/GatewayWebhookService'

const GatewayWebhookRoutes: FastifyPluginAsync = async (app) => {
  const controller = new GatewayWebhookService()

  app.get('/gateway_webhook', { config: {"adminPermission":"payment.gateway_webhook.read"} }, async (request, reply) => {
    const result = await controller.listGatewayWebhook(app, request)
    return reply.send(result)
  })
  app.post('/gateway_webhook', { config: {"adminPermission":"payment.gateway_webhook.create"} }, async (request, reply) => {
    const result = await controller.createGatewayWebhook(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/gateway_webhook/:gateway_webhook_id', { config: {"adminPermission":"payment.gateway_webhook.read"} }, async (request, reply) => {
    const result = await controller.getGatewayWebhookById(app, request)
    return reply.send(result)
  })
  app.put('/gateway_webhook/:gateway_webhook_id', { config: {"adminPermission":"payment.gateway_webhook.update"} }, async (request, reply) => {
    const result = await controller.updateGatewayWebhook(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/gateway_webhook/:gateway_webhook_id', { config: {"adminPermission":"payment.gateway_webhook.delete"} }, async (request, reply) => {
    const result = await controller.deleteGatewayWebhook(app, request)
    return reply.send(result)
  })
}

export default GatewayWebhookRoutes
