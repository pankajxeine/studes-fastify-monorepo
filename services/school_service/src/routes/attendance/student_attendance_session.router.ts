import type { FastifyPluginAsync } from 'fastify'
import { StudentAttendanceSessionService } from '../../services/attendance/student_attendance_session/StudentAttendanceSessionService'

const StudentAttendanceSessionRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StudentAttendanceSessionService()

  app.get('/student_attendance_session', async (request, reply) => {
    const result = await controller.listStudentAttendanceSession(app, request)
    return reply.send(result)
  })
  app.post('/student_attendance_session', async (request, reply) => {
    const result = await controller.createStudentAttendanceSession(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/student_attendance_session/:id', async (request, reply) => {
    const result = await controller.getStudentAttendanceSessionById(app, request)
    return reply.send(result)
  })
  app.put('/student_attendance_session/:id', async (request, reply) => {
    const result = await controller.updateStudentAttendanceSession(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/student_attendance_session/:id', async (request, reply) => {
    const result = await controller.deleteStudentAttendanceSession(app, request)
    return reply.send(result)
  })
}

export default StudentAttendanceSessionRoutes
