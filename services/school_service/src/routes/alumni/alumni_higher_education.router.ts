import type { FastifyPluginAsync } from 'fastify'
import { AlumniHigherEducationService } from '../../services/alumni/alumni_higher_education/AlumniHigherEducationService'

const AlumniHigherEducationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AlumniHigherEducationService()

  app.get('/alumni_higher_education', async (request, reply) => {
    const result = await controller.listAlumniHigherEducation(app, request)
    return reply.send(result)
  })
  app.post('/alumni_higher_education', async (request, reply) => {
    const result = await controller.createAlumniHigherEducation(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/alumni_higher_education/:id', async (request, reply) => {
    const result = await controller.getAlumniHigherEducationById(app, request)
    return reply.send(result)
  })
  app.put('/alumni_higher_education/:id', async (request, reply) => {
    const result = await controller.updateAlumniHigherEducation(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/alumni_higher_education/:id', async (request, reply) => {
    const result = await controller.deleteAlumniHigherEducation(app, request)
    return reply.send(result)
  })
}

export default AlumniHigherEducationRoutes
