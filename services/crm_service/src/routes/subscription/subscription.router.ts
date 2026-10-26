import type { FastifyPluginAsync } from 'fastify'
import { SubscriptionService } from '../../services/subscription/subscription/SubscriptionService'

const SubscriptionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubscriptionService()

  app.get('/subscription', { config: {"adminPermission":"subscription.subscription.read"} }, async (request, reply) => {
    const result = await controller.listSubscription(app, request)
    return reply.send(result)
  })
  app.post('/subscription', { config: {"adminPermission":"subscription.subscription.create"} }, async (request, reply) => {
    const result = await controller.createSubscription(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/subscription/:subscription_id', { config: {"adminPermission":"subscription.subscription.read"} }, async (request, reply) => {
    const result = await controller.getSubscriptionById(app, request)
    return reply.send(result)
  })
  app.put('/subscription/:subscription_id', { config: {"adminPermission":"subscription.subscription.update"} }, async (request, reply) => {
    const result = await controller.updateSubscription(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/subscription/:subscription_id', { config: {"adminPermission":"subscription.subscription.delete"} }, async (request, reply) => {
    const result = await controller.deleteSubscription(app, request)
    return reply.send(result)
  })
}

export default SubscriptionRoutes
