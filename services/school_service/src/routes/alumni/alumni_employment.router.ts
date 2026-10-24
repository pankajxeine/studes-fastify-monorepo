import type { FastifyPluginAsync } from 'fastify'
import { AlumniEmploymentService } from '../../services/alumni/alumni_employment/AlumniEmploymentService'

const AlumniEmploymentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AlumniEmploymentService()

  app.get('/alumni_employment', async (request, reply) => {
    const result = await controller.listAlumniEmployment(app, request)
    return reply.send(result)
  })
  app.post('/alumni_employment', async (request, reply) => {
    const result = await controller.createAlumniEmployment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/alumni_employment/:id', async (request, reply) => {
    const result = await controller.getAlumniEmploymentById(app, request)
    return reply.send(result)
  })
  app.put('/alumni_employment/:id', async (request, reply) => {
    const result = await controller.updateAlumniEmployment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/alumni_employment/:id', async (request, reply) => {
    const result = await controller.deleteAlumniEmployment(app, request)
    return reply.send(result)
  })
}

export default AlumniEmploymentRoutes
