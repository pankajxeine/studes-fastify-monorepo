import type { FastifyPluginAsync } from 'fastify'
import { AcademicsService } from '../services/AcademicsService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const AcademicsRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AcademicsService()
  app.get('/courses', async (request, reply) => {
    return await controller.listCourses(buildHeaders(request))
  })
  app.post('/courses', async (request, reply) => {
    return await controller.createCourse(request.body as any, buildHeaders(request))
  })
  app.get('/offerings', async (request, reply) => {
    return await controller.listOfferings(buildHeaders(request))
  })
  app.post('/offerings', async (request, reply) => {
    return await controller.createOffering(request.body as any, buildHeaders(request))
  })
  app.post('/enrollments', async (request, reply) => {
    return await controller.createEnrollment(request.body as any, buildHeaders(request))
  })
}

export default AcademicsRoutes
