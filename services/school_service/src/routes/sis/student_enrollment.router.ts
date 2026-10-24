import type { FastifyPluginAsync } from 'fastify'
import { StudentEnrollmentService } from '../../services/sis/student_enrollment/StudentEnrollmentService'

const StudentEnrollmentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StudentEnrollmentService()

  app.get('/student_enrollment', async (request, reply) => {
    const result = await controller.listStudentEnrollment(app, request)
    return reply.send(result)
  })
  app.post('/student_enrollment', async (request, reply) => {
    const result = await controller.createStudentEnrollment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/student_enrollment/:id', async (request, reply) => {
    const result = await controller.getStudentEnrollmentById(app, request)
    return reply.send(result)
  })
  app.put('/student_enrollment/:id', async (request, reply) => {
    const result = await controller.updateStudentEnrollment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/student_enrollment/:id', async (request, reply) => {
    const result = await controller.deleteStudentEnrollment(app, request)
    return reply.send(result)
  })
}

export default StudentEnrollmentRoutes
