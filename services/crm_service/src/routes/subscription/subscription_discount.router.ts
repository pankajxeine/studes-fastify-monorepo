import type { FastifyPluginAsync } from 'fastify'
import { SubscriptionDiscountService } from '../../services/subscription/subscription_discount/SubscriptionDiscountService'

const SubscriptionDiscountRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubscriptionDiscountService()

  app.get('/subscription_discount', async (request, reply) => {
    const result = await controller.listSubscriptionDiscount(app, request)
    return reply.send(result)
  })
  app.post('/subscription_discount', async (request, reply) => {
    const result = await controller.createSubscriptionDiscount(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/subscription_discount/:id', async (request, reply) => {
    const result = await controller.getSubscriptionDiscountById(app, request)
    return reply.send(result)
  })
  app.put('/subscription_discount/:id', async (request, reply) => {
    const result = await controller.updateSubscriptionDiscount(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/subscription_discount/:id', async (request, reply) => {
    const result = await controller.deleteSubscriptionDiscount(app, request)
    return reply.send(result)
  })
}

export default SubscriptionDiscountRoutes
