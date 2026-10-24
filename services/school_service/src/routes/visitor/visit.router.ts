import type { FastifyPluginAsync } from 'fastify'
import { VisitService } from '../../services/visitor/visit/VisitService'

const VisitRoutes: FastifyPluginAsync = async (app) => {
  const controller = new VisitService()

  app.get('/visit', async (request, reply) => {
    const result = await controller.listVisit(app, request)
    return reply.send(result)
  })
  app.post('/visit', async (request, reply) => {
    const result = await controller.createVisit(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/visit/:id', async (request, reply) => {
    const result = await controller.getVisitById(app, request)
    return reply.send(result)
  })
  app.put('/visit/:id', async (request, reply) => {
    const result = await controller.updateVisit(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/visit/:id', async (request, reply) => {
    const result = await controller.deleteVisit(app, request)
    return reply.send(result)
  })
}

export default VisitRoutes
