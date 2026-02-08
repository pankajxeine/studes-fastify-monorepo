import type { FastifyPluginAsync } from 'fastify'
import { CoreService } from '../services/CoreService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const CoreRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CoreService()
  app.get('/students', async (request, reply) => {
    return await controller.listStudents(buildHeaders(request))
  })
  app.post('/students', async (request, reply) => {
    return await controller.createStudent(request.body as any, buildHeaders(request))
  })
  app.get('/teachers', async (request, reply) => {
    return await controller.listTeachers(buildHeaders(request))
  })
  app.post('/teachers', async (request, reply) => {
    return await controller.createTeacher(request.body as any, buildHeaders(request))
  })
  app.get('/parents', async (request, reply) => {
    return await controller.listParents(buildHeaders(request))
  })
  app.post('/parents', async (request, reply) => {
    return await controller.createParent(request.body as any, buildHeaders(request))
  })
  app.get('/staff', async (request, reply) => {
    return await controller.listStaff(buildHeaders(request))
  })
  app.post('/staff', async (request, reply) => {
    return await controller.createStaff(request.body as any, buildHeaders(request))
  })
}

export default CoreRoutes
