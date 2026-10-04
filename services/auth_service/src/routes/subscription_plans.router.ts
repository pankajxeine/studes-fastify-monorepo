import type { FastifyPluginAsync } from 'fastify'
import { SubscriptionPlansService } from '../services/cpanel/subscription_plans/SubscriptionPlansService'

const SubscriptionPlansRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubscriptionPlansService()

  app.get('/subscription_plans', async (request, reply) => {
    const result = await controller.listSubscriptionPlans(app, request)
    return reply.send(result)
  })
  app.post('/subscription_plans', async (request, reply) => {
    const result = await controller.createSubscriptionPlan(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/subscription_plans/:id', async (request, reply) => {
    const result = await controller.getSubscriptionPlansById(app, request)
    return reply.send(result)
  })
  app.put('/subscription_plans/:id', async (request, reply) => {
    const result = await controller.updateSubscriptionPlan(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/subscription_plans/:id', async (request, reply) => {
    const result = await controller.deleteSubscriptionPlan(app, request)
    return reply.send(result)
  })
}

export default SubscriptionPlansRoutes
