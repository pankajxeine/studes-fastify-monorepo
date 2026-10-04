import type { FastifyPluginAsync } from 'fastify'
import { CronsService } from '../services/cpanel/crons/CronsService'

const CronsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CronsService()

  app.get('/crons', async (request, reply) => {
    const result = await controller.listCrons(app, request)
    return reply.send(result)
  })
  app.post('/crons', async (request, reply) => {
    const result = await controller.createCron(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crons/:id', async (request, reply) => {
    const result = await controller.getCronsById(app, request)
    return reply.send(result)
  })
  app.put('/crons/:id', async (request, reply) => {
    const result = await controller.updateCron(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crons/:id', async (request, reply) => {
    const result = await controller.deleteCron(app, request)
    return reply.send(result)
  })
}

export default CronsRoutes
