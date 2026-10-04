import type { FastifyPluginAsync } from 'fastify'
import { AcademicsService } from '../services/academics/AcademicsService'

const AcademicsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AcademicsService()

  app.get('/courses', async (request, reply) => {
    const result = await controller.listCourses(app, request)
    return reply.send(result)
  })
  app.post('/courses', async (request, reply) => {
    const result = await controller.createCourse(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/offerings', async (request, reply) => {
    const result = await controller.listOfferings(app, request)
    return reply.send(result)
  })
  app.post('/offerings', async (request, reply) => {
    const result = await controller.createOffering(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/enrollments', async (request, reply) => {
    const result = await controller.createEnrollment(app, request.body as any, request)
    return reply.send(result)
  })
}

export default AcademicsRoutes
