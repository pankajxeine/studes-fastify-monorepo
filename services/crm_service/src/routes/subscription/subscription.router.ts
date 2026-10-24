import type { FastifyPluginAsync } from 'fastify'
import { SubscriptionService } from '../../services/subscription/subscription/SubscriptionService'

const SubscriptionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubscriptionService()

  app.get('/subscription', async (request, reply) => {
    const result = await controller.listSubscription(app, request)
    return reply.send(result)
  })
  app.post('/subscription', async (request, reply) => {
    const result = await controller.createSubscription(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/subscription/:id', async (request, reply) => {
    const result = await controller.getSubscriptionById(app, request)
    return reply.send(result)
  })
  app.put('/subscription/:id', async (request, reply) => {
    const result = await controller.updateSubscription(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/subscription/:id', async (request, reply) => {
    const result = await controller.deleteSubscription(app, request)
    return reply.send(result)
  })
}

export default SubscriptionRoutes
