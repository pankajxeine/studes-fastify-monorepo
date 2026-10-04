import type { FastifyPluginAsync } from 'fastify'
import { CoreService } from '../services/core/CoreService'

const CoreRoutes: FastifyPluginAsync = async (app) => {
  const controller = new CoreService()

  app.get('/students', async (request, reply) => {
    const result = await controller.listStudents(app, request)
    return reply.send(result)
  })
  app.post('/students', async (request, reply) => {
    const result = await controller.createStudent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/teachers', async (request, reply) => {
    const result = await controller.listTeachers(app, request)
    return reply.send(result)
  })
  app.post('/teachers', async (request, reply) => {
    const result = await controller.createTeacher(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/parents', async (request, reply) => {
    const result = await controller.listParents(app, request)
    return reply.send(result)
  })
  app.post('/parents', async (request, reply) => {
    const result = await controller.createParent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/staff', async (request, reply) => {
    const result = await controller.listStaff(app, request)
    return reply.send(result)
  })
  app.post('/staff', async (request, reply) => {
    const result = await controller.createStaff(app, request.body as any, request)
    return reply.send(result)
  })
}

export default CoreRoutes
