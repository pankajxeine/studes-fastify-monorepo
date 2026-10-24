import type { FastifyPluginAsync } from 'fastify'
import { StudentService } from '../../services/sis/student/StudentService'

const StudentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StudentService()

  app.get('/student', async (request, reply) => {
    const result = await controller.listStudent(app, request)
    return reply.send(result)
  })
  app.post('/student', async (request, reply) => {
    const result = await controller.createStudent(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/student/:id', async (request, reply) => {
    const result = await controller.getStudentById(app, request)
    return reply.send(result)
  })
  app.put('/student/:id', async (request, reply) => {
    const result = await controller.updateStudent(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/student/:id', async (request, reply) => {
    const result = await controller.deleteStudent(app, request)
    return reply.send(result)
  })
}

export default StudentRoutes
