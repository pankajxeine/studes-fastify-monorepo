import type { FastifyPluginAsync } from 'fastify'
import { SubscriptionItemService } from '../../services/subscription/subscription_item/SubscriptionItemService'

const SubscriptionItemRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubscriptionItemService()

  app.get('/subscription_item', { config: {"adminPermission":"subscription.subscription_item.read"} }, async (request, reply) => {
    const result = await controller.listSubscriptionItem(app, request)
    return reply.send(result)
  })
  app.post('/subscription_item', { config: {"adminPermission":"subscription.subscription_item.create"} }, async (request, reply) => {
    const result = await controller.createSubscriptionItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/subscription_item/:subscription_item_id', { config: {"adminPermission":"subscription.subscription_item.read"} }, async (request, reply) => {
    const result = await controller.getSubscriptionItemById(app, request)
    return reply.send(result)
  })
  app.put('/subscription_item/:subscription_item_id', { config: {"adminPermission":"subscription.subscription_item.update"} }, async (request, reply) => {
    const result = await controller.updateSubscriptionItem(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/subscription_item/:subscription_item_id', { config: {"adminPermission":"subscription.subscription_item.delete"} }, async (request, reply) => {
    const result = await controller.deleteSubscriptionItem(app, request)
    return reply.send(result)
  })
}

export default SubscriptionItemRoutes
