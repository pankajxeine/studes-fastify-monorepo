import type { FastifyPluginAsync } from 'fastify'
import { SubscriptionDiscountService } from '../../services/subscription/subscription_discount/SubscriptionDiscountService'

const SubscriptionDiscountRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubscriptionDiscountService()

  app.get('/subscription_discount', { config: {"adminPermission":"subscription.subscription_discount.read"} }, async (request, reply) => {
    const result = await controller.listSubscriptionDiscount(app, request)
    return reply.send(result)
  })
  app.post('/subscription_discount', { config: {"adminPermission":"subscription.subscription_discount.create"} }, async (request, reply) => {
    const result = await controller.createSubscriptionDiscount(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/subscription_discount/:subscription_discount_id', { config: {"adminPermission":"subscription.subscription_discount.read"} }, async (request, reply) => {
    const result = await controller.getSubscriptionDiscountById(app, request)
    return reply.send(result)
  })
  app.put('/subscription_discount/:subscription_discount_id', { config: {"adminPermission":"subscription.subscription_discount.update"} }, async (request, reply) => {
    const result = await controller.updateSubscriptionDiscount(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/subscription_discount/:subscription_discount_id', { config: {"adminPermission":"subscription.subscription_discount.delete"} }, async (request, reply) => {
    const result = await controller.deleteSubscriptionDiscount(app, request)
    return reply.send(result)
  })
}

export default SubscriptionDiscountRoutes
