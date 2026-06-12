import type { FastifyPluginAsync } from 'fastify'
import { AcademicsService } from '../services/AcademicsService'

const AcademicsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AcademicsService()
  app.get('/courses', async (request, reply) => {
    return await controller.listCourses(app, request)
  })
  app.post('/courses', async (request, reply) => {
    return await controller.createCourse(app, request.body as any, request)
  })
  app.get('/offerings', async (request, reply) => {
    return await controller.listOfferings(app, request)
  })
  app.post('/offerings', async (request, reply) => {
    return await controller.createOffering(app, request.body as any, request)
  })
  app.post('/enrollments', async (request, reply) => {
    return await controller.createEnrollment(app, request.body as any, request)
  })
}

export default AcademicsRoutes
