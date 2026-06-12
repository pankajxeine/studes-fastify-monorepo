import type { FastifyPluginAsync } from 'fastify'
import { CoreService } from '../services/CoreService'

const CoreRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CoreService()
  app.get('/students', async (request, reply) => {
    return await controller.listStudents(app, request)
  })
  app.post('/students', async (request, reply) => {
    return await controller.createStudent(app, request.body as any, request)
  })
  app.get('/teachers', async (request, reply) => {
    return await controller.listTeachers(app, request)
  })
  app.post('/teachers', async (request, reply) => {
    return await controller.createTeacher(app, request.body as any, request)
  })
  app.get('/parents', async (request, reply) => {
    return await controller.listParents(app, request)
  })
  app.post('/parents', async (request, reply) => {
    return await controller.createParent(app, request.body as any, request)
  })
  app.get('/staff', async (request, reply) => {
    return await controller.listStaff(app, request)
  })
  app.post('/staff', async (request, reply) => {
    return await controller.createStaff(app, request.body as any, request)
  })
}

export default CoreRoutes
