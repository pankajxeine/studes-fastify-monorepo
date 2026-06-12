import type { FastifyPluginAsync } from 'fastify'
import { AttendanceService } from '../services/AttendanceService'

const AttendanceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AttendanceService()
  app.post('/attendance/students', async (request, reply) => {
    return await controller.markStudentAttendance(app, request.body as any, request)
  })
  app.post('/attendance/staff', async (request, reply) => {
    return await controller.markStaffAttendance(app, request.body as any, request)
  })
}

export default AttendanceRoutes
