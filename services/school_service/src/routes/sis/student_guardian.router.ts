import type { FastifyPluginAsync } from 'fastify'
import { StudentGuardianService } from '../../services/sis/student_guardian/StudentGuardianService'

const StudentGuardianRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StudentGuardianService()

  app.get('/student_guardian', async (request, reply) => {
    const result = await controller.listStudentGuardian(app, request)
    return reply.send(result)
  })
  app.post('/student_guardian', async (request, reply) => {
    const result = await controller.createStudentGuardian(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/student_guardian/:id', async (request, reply) => {
    const result = await controller.getStudentGuardianById(app, request)
    return reply.send(result)
  })
  app.put('/student_guardian/:id', async (request, reply) => {
    const result = await controller.updateStudentGuardian(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/student_guardian/:id', async (request, reply) => {
    const result = await controller.deleteStudentGuardian(app, request)
    return reply.send(result)
  })
}

export default StudentGuardianRoutes
