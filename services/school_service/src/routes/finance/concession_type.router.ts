import type { FastifyPluginAsync } from 'fastify'
import { ConcessionTypeService } from '../../services/finance/concession_type/ConcessionTypeService'

const ConcessionTypeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ConcessionTypeService()

  app.get('/concession_type', async (request, reply) => {
    const result = await controller.listConcessionType(app, request)
    return reply.send(result)
  })
  app.post('/concession_type', async (request, reply) => {
    const result = await controller.createConcessionType(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/concession_type/:id', async (request, reply) => {
    const result = await controller.getConcessionTypeById(app, request)
    return reply.send(result)
  })
  app.put('/concession_type/:id', async (request, reply) => {
    const result = await controller.updateConcessionType(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/concession_type/:id', async (request, reply) => {
    const result = await controller.deleteConcessionType(app, request)
    return reply.send(result)
  })
}

export default ConcessionTypeRoutes
