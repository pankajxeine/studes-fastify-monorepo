import type { FastifyPluginAsync } from 'fastify'
import { InstituteSubscriptionsService } from '../services/institute_subscriptions/InstituteSubscriptionsService'

const InstituteSubscriptionsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InstituteSubscriptionsService()
  app.get('/institute_subscriptions', async (request, reply) => {
     return await reply.send(controller.listInstituteSubscriptions(app, request))
  })
  app.post('/institute_subscriptions', async (request, reply) => {
     return await reply.send(controller.createInstituteSubscription(app, request.body as any, request))
  })
  app.get('/institute_subscriptions/:id', async (request, reply) => {
     return await reply.send(controller.getInstituteSubscriptionsById(app, request))
  })
  app.put('/institute_subscriptions/:id', async (request, reply) => {
     return await reply.send(controller.updateInstituteSubscription(app, request.body as any, request))
  })
  app.delete('/institute_subscriptions/:id', async (request, reply) => {
      await controller.deleteInstituteSubscription(app, request) 

             reply.code(201) 
          
  })
}

export default InstituteSubscriptionsRoutes
