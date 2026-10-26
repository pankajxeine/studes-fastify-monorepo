import type { FastifyPluginAsync } from 'fastify'
import { SubscriptionChangeService } from '../../services/subscription/subscription_change/SubscriptionChangeService'

const SubscriptionChangeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubscriptionChangeService()

  app.get('/subscription_change', { config: {"adminPermission":"subscription.subscription_change.read"} }, async (request, reply) => {
    const result = await controller.listSubscriptionChange(app, request)
    return reply.send(result)
  })
  app.post('/subscription_change', { config: {"adminPermission":"subscription.subscription_change.create"} }, async (request, reply) => {
    const result = await controller.createSubscriptionChange(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/subscription_change/:subscription_change_id', { config: {"adminPermission":"subscription.subscription_change.read"} }, async (request, reply) => {
    const result = await controller.getSubscriptionChangeById(app, request)
    return reply.send(result)
  })
  app.put('/subscription_change/:subscription_change_id', { config: {"adminPermission":"subscription.subscription_change.update"} }, async (request, reply) => {
    const result = await controller.updateSubscriptionChange(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/subscription_change/:subscription_change_id', { config: {"adminPermission":"subscription.subscription_change.delete"} }, async (request, reply) => {
    const result = await controller.deleteSubscriptionChange(app, request)
    return reply.send(result)
  })
}

export default SubscriptionChangeRoutes
