import type { FastifyPluginAsync } from 'fastify'
import { CrmsService } from '../services/cpanel_router/crms/CrmsService'

const CrmsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CrmsService()

  app.get('/crms', async (request, reply) => {
    const result = await controller.listCrms(app, request)
    return reply.send(result)
  })
  app.post('/crms', async (request, reply) => {
    const result = await controller.createCrm(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/crms/:id', async (request, reply) => {
    const result = await controller.getCrmsById(app, request)
    return reply.send(result)
  })
  app.put('/crms/:id', async (request, reply) => {
    const result = await controller.updateCrm(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/crms/:id', async (request, reply) => {
    const result = await controller.deleteCrm(app, request)
    return reply.send(result)
  })
}

export default CrmsRoutes
