import type { FastifyPluginAsync } from 'fastify'
import { PreviousEducationService } from '../../services/sis/previous_education/PreviousEducationService'

const PreviousEducationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new PreviousEducationService()

  app.get('/previous_education', async (request, reply) => {
    const result = await controller.listPreviousEducation(app, request)
    return reply.send(result)
  })
  app.post('/previous_education', async (request, reply) => {
    const result = await controller.createPreviousEducation(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/previous_education/:id', async (request, reply) => {
    const result = await controller.getPreviousEducationById(app, request)
    return reply.send(result)
  })
  app.put('/previous_education/:id', async (request, reply) => {
    const result = await controller.updatePreviousEducation(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/previous_education/:id', async (request, reply) => {
    const result = await controller.deletePreviousEducation(app, request)
    return reply.send(result)
  })
}

export default PreviousEducationRoutes
