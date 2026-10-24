import type { FastifyPluginAsync } from 'fastify'
import { TermService } from '../../services/academic/term/TermService'

const TermRoutes: FastifyPluginAsync = async (app) => {
  const controller = new TermService()

  app.get('/term', async (request, reply) => {
    const result = await controller.listTerm(app, request)
    return reply.send(result)
  })
  app.post('/term', async (request, reply) => {
    const result = await controller.createTerm(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/term/:id', async (request, reply) => {
    const result = await controller.getTermById(app, request)
    return reply.send(result)
  })
  app.put('/term/:id', async (request, reply) => {
    const result = await controller.updateTerm(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/term/:id', async (request, reply) => {
    const result = await controller.deleteTerm(app, request)
    return reply.send(result)
  })
}

export default TermRoutes
