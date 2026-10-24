import type { FastifyPluginAsync } from 'fastify'
import { StaffService } from '../../services/hr/staff/StaffService'

const StaffRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StaffService()

  app.get('/staff', async (request, reply) => {
    const result = await controller.listStaff(app, request)
    return reply.send(result)
  })
  app.post('/staff', async (request, reply) => {
    const result = await controller.createStaff(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/staff/:id', async (request, reply) => {
    const result = await controller.getStaffById(app, request)
    return reply.send(result)
  })
  app.put('/staff/:id', async (request, reply) => {
    const result = await controller.updateStaff(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/staff/:id', async (request, reply) => {
    const result = await controller.deleteStaff(app, request)
    return reply.send(result)
  })
}

export default StaffRoutes
