import type { FastifyPluginAsync } from 'fastify'
import { SubscriptionPlansService } from '../services/cpanel/subscription_plans/SubscriptionPlansService'

const SubscriptionPlansRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubscriptionPlansService()

  app.get('/subscription_plans', async (request, reply) => {
    
    return await reply.send(controller.listSubscriptionPlans(app, request))
  })
  app.post('/subscription_plans', async (request, reply) => {
    return await reply.send(controller.createSubscriptionPlan(app, request.body as any, request))
  })
  app.get('/subscription_plans/:id', async (request, reply) => {
    
    return await reply.send(controller.getSubscriptionPlansById(app, request))
  })
  app.put('/subscription_plans/:id', async (request, reply) => {
    return await reply.send(controller.updateSubscriptionPlan(app, request.body as any, request))
  })
  app.delete('/subscription_plans/:id', async (request, reply) => {
    
    return await reply.send(controller.deleteSubscriptionPlan(app, request))
  })
}

export default SubscriptionPlansRoutes
