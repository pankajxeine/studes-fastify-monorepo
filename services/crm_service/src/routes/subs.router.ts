import type { FastifyPluginAsync } from 'fastify'
import { SubsService } from '../services/cpanels/subs/SubsService'

const SubsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubsService()

  app.get('/subs', async (request, reply) => {
    const result = await controller.listSubs(app, request)
    return reply.send(result)
  })
  app.post('/subs', async (request, reply) => {
    const result = await controller.createSub(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/subs/:id', async (request, reply) => {
    const result = await controller.getSubsById(app, request)
    return reply.send(result)
  })
  app.put('/subs/:id', async (request, reply) => {
    const result = await controller.updateSub(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/subs/:id', async (request, reply) => {
    const result = await controller.deleteSub(app, request)
    return reply.send(result)
  })
}

export default SubsRoutes
