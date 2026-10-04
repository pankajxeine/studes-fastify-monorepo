import type { FastifyPluginAsync } from 'fastify'
import { AttendanceService } from '../services/attendance/AttendanceService'

const AttendanceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AttendanceService()

  app.post('/attendance/students', async (request, reply) => {
    const result = await controller.markStudentAttendance(app, request.body as any, request)
    return reply.send(result)
  })
  app.post('/attendance/staff', async (request, reply) => {
    const result = await controller.markStaffAttendance(app, request.body as any, request)
    return reply.send(result)
  })
}

export default AttendanceRoutes
