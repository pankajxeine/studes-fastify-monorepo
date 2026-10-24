import type { FastifyPluginAsync } from 'fastify'
import { StudentMarkService } from '../../services/exam/student_mark/StudentMarkService'

const StudentMarkRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StudentMarkService()

  app.get('/student_mark', async (request, reply) => {
    const result = await controller.listStudentMark(app, request)
    return reply.send(result)
  })
  app.post('/student_mark', async (request, reply) => {
    const result = await controller.createStudentMark(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/student_mark/:id', async (request, reply) => {
    const result = await controller.getStudentMarkById(app, request)
    return reply.send(result)
  })
  app.put('/student_mark/:id', async (request, reply) => {
    const result = await controller.updateStudentMark(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/student_mark/:id', async (request, reply) => {
    const result = await controller.deleteStudentMark(app, request)
    return reply.send(result)
  })
}

export default StudentMarkRoutes
