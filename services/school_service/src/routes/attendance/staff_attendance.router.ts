import type { FastifyPluginAsync } from 'fastify'
import { StaffAttendanceService } from '../../services/attendance/staff_attendance/StaffAttendanceService'

const StaffAttendanceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StaffAttendanceService()

  app.get('/staff_attendance', async (request, reply) => {
    const result = await controller.listStaffAttendance(app, request)
    return reply.send(result)
  })
  app.post('/staff_attendance', async (request, reply) => {
    const result = await controller.createStaffAttendance(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/staff_attendance/:id', async (request, reply) => {
    const result = await controller.getStaffAttendanceById(app, request)
    return reply.send(result)
  })
  app.put('/staff_attendance/:id', async (request, reply) => {
    const result = await controller.updateStaffAttendance(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/staff_attendance/:id', async (request, reply) => {
    const result = await controller.deleteStaffAttendance(app, request)
    return reply.send(result)
  })
}

export default StaffAttendanceRoutes
