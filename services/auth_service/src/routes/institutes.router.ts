import type { FastifyPluginAsync } from 'fastify'
import { InstitutesService } from '../services/cpanel/institutes/InstitutesService'

const InstitutesRoutes: FastifyPluginAsync = async (app) => {
  const controller = new InstitutesService()

  app.get('/institutes', async (request, reply) => {

    return await reply.send(controller.listInstitutes(app, request))
  })
  app.post('/institutes', async (request, reply) => {
    return await reply.send(controller.createInstitute(app, request.body as any, request))
  })
  app.get('/institutes/:id', async (request, reply) => {

    return await reply.send(controller.getInstitutesById(app, request))
  })
  app.put('/institutes/:id', async (request, reply) => {
    return await reply.send(controller.updateInstitute(app, request.body as any, request))
  })
  app.delete('/institutes/:id', async (request, reply) => {

    return await reply.send(controller.deleteInstitute(app, request))
  })
}

export default InstitutesRoutes
