import type { FastifyPluginAsync } from 'fastify'
import { IndustryCronsService } from '../services/cpanel/industry_crons/IndustryCronsService'

const IndustryCronsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IndustryCronsService()

  app.get('/industry_crons', async (request, reply) => {
    const result = await controller.listIndustryCrons(app, request)
    return reply.send(result)
  })
  app.post('/industry_crons', async (request, reply) => {
    const result = await controller.createIndustryCron(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/industry_crons/:id', async (request, reply) => {
    const result = await controller.getIndustryCronsById(app, request)
    return reply.send(result)
  })
  app.put('/industry_crons/:id', async (request, reply) => {
    const result = await controller.updateIndustryCron(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/industry_crons/:id', async (request, reply) => {
    const result = await controller.deleteIndustryCron(app, request)
    return reply.send(result)
  })
}

export default IndustryCronsRoutes
