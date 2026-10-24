import type { FastifyPluginAsync } from 'fastify'
import { SubscriptionChangeService } from '../../services/subscription/subscription_change/SubscriptionChangeService'

const SubscriptionChangeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubscriptionChangeService()

  app.get('/subscription_change', async (request, reply) => {
    const result = await controller.listSubscriptionChange(app, request)
    return reply.send(result)
  })
  app.post('/subscription_change', async (request, reply) => {
    const result = await controller.createSubscriptionChange(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/subscription_change/:id', async (request, reply) => {
    const result = await controller.getSubscriptionChangeById(app, request)
    return reply.send(result)
  })
  app.put('/subscription_change/:id', async (request, reply) => {
    const result = await controller.updateSubscriptionChange(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/subscription_change/:id', async (request, reply) => {
    const result = await controller.deleteSubscriptionChange(app, request)
    return reply.send(result)
  })
}

export default SubscriptionChangeRoutes
