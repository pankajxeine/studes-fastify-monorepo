import type { FastifyPluginAsync } from 'fastify'
import { InstitutesService } from '../services/cpanel/institutes/InstitutesService'

const InstitutesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InstitutesService()

  app.get('/institutes', async (request, reply) => {
    const result = await controller.listInstitutes(app, request)
    return reply.send(result)
  })
  app.post('/institutes', async (request, reply) => {
    const result = await controller.createInstitute(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/institutes/:id', async (request, reply) => {
    const result = await controller.getInstitutesById(app, request)
    return reply.send(result)
  })
  app.put('/institutes/:id', async (request, reply) => {
    const result = await controller.updateInstitute(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/institutes/:id', async (request, reply) => {
    const result = await controller.deleteInstitute(app, request)
    return reply.send(result)
  })
}

export default InstitutesRoutes
