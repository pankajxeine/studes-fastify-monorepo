import type { FastifyPluginAsync } from 'fastify'
import { SubCronsService } from '../services/cpanels/sub_crons/SubCronsService'

const SubCronsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new SubCronsService()

  app.get('/sub_crons', async (request, reply) => {
    const result = await controller.listSubCrons(app, request)
    return reply.send(result)
  })
  app.post('/sub_crons', async (request, reply) => {
    const result = await controller.createSubCron(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/sub_crons/:id', async (request, reply) => {
    const result = await controller.getSubCronsById(app, request)
    return reply.send(result)
  })
  app.put('/sub_crons/:id', async (request, reply) => {
    const result = await controller.updateSubCron(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/sub_crons/:id', async (request, reply) => {
    const result = await controller.deleteSubCron(app, request)
    return reply.send(result)
  })
}

export default SubCronsRoutes
