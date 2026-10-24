import type { FastifyPluginAsync } from 'fastify'
import { ImmunizationService } from '../../services/health/immunization/ImmunizationService'

const ImmunizationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ImmunizationService()

  app.get('/immunization', async (request, reply) => {
    const result = await controller.listImmunization(app, request)
    return reply.send(result)
  })
  app.post('/immunization', async (request, reply) => {
    const result = await controller.createImmunization(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/immunization/:id', async (request, reply) => {
    const result = await controller.getImmunizationById(app, request)
    return reply.send(result)
  })
  app.put('/immunization/:id', async (request, reply) => {
    const result = await controller.updateImmunization(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/immunization/:id', async (request, reply) => {
    const result = await controller.deleteImmunization(app, request)
    return reply.send(result)
  })
}

export default ImmunizationRoutes
