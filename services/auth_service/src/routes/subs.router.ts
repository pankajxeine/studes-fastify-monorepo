import type { FastifyPluginAsync } from 'fastify'
import { SubsService } from '../services/cpanel/subs/SubsService'

const SubsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubsService()

  app.get('/subs', async (request, reply) => {

    return await reply.send(controller.listSubs(app, request))
  })
  app.post('/subs', async (request, reply) => {
    return await reply.send(controller.createSub(app, request.body as any, request))
  })
  app.get('/subs/:id', async (request, reply) => {

    return await reply.send(controller.getSubsById(app, request))
  })
  app.put('/subs/:id', async (request, reply) => {
    return await reply.send(controller.updateSub(app, request.body as any, request))
  })
  app.delete('/subs/:id', async (request, reply) => {

    return await reply.send(controller.deleteSub(app, request))
  })
}

export default SubsRoutes
