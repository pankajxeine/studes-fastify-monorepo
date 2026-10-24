import type { FastifyPluginAsync } from 'fastify'
import { StaffQualificationService } from '../../services/hr/staff_qualification/StaffQualificationService'

const StaffQualificationRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StaffQualificationService()

  app.get('/staff_qualification', async (request, reply) => {
    const result = await controller.listStaffQualification(app, request)
    return reply.send(result)
  })
  app.post('/staff_qualification', async (request, reply) => {
    const result = await controller.createStaffQualification(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/staff_qualification/:id', async (request, reply) => {
    const result = await controller.getStaffQualificationById(app, request)
    return reply.send(result)
  })
  app.put('/staff_qualification/:id', async (request, reply) => {
    const result = await controller.updateStaffQualification(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/staff_qualification/:id', async (request, reply) => {
    const result = await controller.deleteStaffQualification(app, request)
    return reply.send(result)
  })
}

export default StaffQualificationRoutes
