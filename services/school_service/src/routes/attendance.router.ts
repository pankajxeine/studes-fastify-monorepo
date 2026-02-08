import type { FastifyPluginAsync } from 'fastify'
import { AttendanceService } from '../services/AttendanceService'

function buildHeaders(request: any) {
  return {
    tenantId: request.headers['x-tenant-id'] as string | undefined,
    tenantSlug: request.headers['x-tenant-slug'] as string | undefined,
    authorization: request.headers['authorization'] as string | undefined
  }
}

const AttendanceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AttendanceService()
  app.post('/attendance/students', async (request, reply) => {
    return await controller.markStudentAttendance(request.body as any, buildHeaders(request))
  })
  app.post('/attendance/staff', async (request, reply) => {
    return await controller.markStaffAttendance(request.body as any, buildHeaders(request))
  })
}

export default AttendanceRoutes
