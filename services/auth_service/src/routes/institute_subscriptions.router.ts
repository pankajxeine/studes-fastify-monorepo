import type { FastifyPluginAsync } from 'fastify'
import { InstituteSubscriptionsService } from '../services/cpanels/institute_subscriptions/InstituteSubscriptionsService'

const InstituteSubscriptionsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InstituteSubscriptionsService()

  app.get('/institute_subscriptions', async (request, reply) => {
    const result = await controller.listInstituteSubscriptions(app, request)
    return reply.send(result)
  })
  app.post('/institute_subscriptions', async (request, reply) => {
    const result = await controller.createInstituteSubscription(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/institute_subscriptions/:id', async (request, reply) => {
    const result = await controller.getInstituteSubscriptionsById(app, request)
    return reply.send(result)
  })
  app.put('/institute_subscriptions/:id', async (request, reply) => {
    const result = await controller.updateInstituteSubscription(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/institute_subscriptions/:id', async (request, reply) => {
    const result = await controller.deleteInstituteSubscription(app, request)
    return reply.send(result)
  })
}

export default InstituteSubscriptionsRoutes
