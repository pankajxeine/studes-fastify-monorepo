import type { FastifyPluginAsync } from 'fastify'
import { StudentAttendanceService } from '../../services/attendance/student_attendance/StudentAttendanceService'

const StudentAttendanceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StudentAttendanceService()

  app.get('/student_attendance', async (request, reply) => {
    const result = await controller.listStudentAttendance(app, request)
    return reply.send(result)
  })
  app.post('/student_attendance', async (request, reply) => {
    const result = await controller.createStudentAttendance(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/student_attendance/:id', async (request, reply) => {
    const result = await controller.getStudentAttendanceById(app, request)
    return reply.send(result)
  })
  app.put('/student_attendance/:id', async (request, reply) => {
    const result = await controller.updateStudentAttendance(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/student_attendance/:id', async (request, reply) => {
    const result = await controller.deleteStudentAttendance(app, request)
    return reply.send(result)
  })
}

export default StudentAttendanceRoutes
