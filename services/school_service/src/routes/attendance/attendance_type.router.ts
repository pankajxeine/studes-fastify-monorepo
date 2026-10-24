import type { FastifyPluginAsync } from 'fastify'
import { AttendanceTypeService } from '../../services/attendance/attendance_type/AttendanceTypeService'

const AttendanceTypeRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AttendanceTypeService()

  app.get('/attendance_type', async (request, reply) => {
    const result = await controller.listAttendanceType(app, request)
    return reply.send(result)
  })
  app.post('/attendance_type', async (request, reply) => {
    const result = await controller.createAttendanceType(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/attendance_type/:id', async (request, reply) => {
    const result = await controller.getAttendanceTypeById(app, request)
    return reply.send(result)
  })
  app.put('/attendance_type/:id', async (request, reply) => {
    const result = await controller.updateAttendanceType(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/attendance_type/:id', async (request, reply) => {
    const result = await controller.deleteAttendanceType(app, request)
    return reply.send(result)
  })
}

export default AttendanceTypeRoutes
