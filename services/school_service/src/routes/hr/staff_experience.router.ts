import type { FastifyPluginAsync } from 'fastify'
import { StaffExperienceService } from '../../services/hr/staff_experience/StaffExperienceService'

const StaffExperienceRoutes: FastifyPluginAsync = async (app) => {
  const controller = new StaffExperienceService()

  app.get('/staff_experience', async (request, reply) => {
    const result = await controller.listStaffExperience(app, request)
    return reply.send(result)
  })
  app.post('/staff_experience', async (request, reply) => {
    const result = await controller.createStaffExperience(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/staff_experience/:id', async (request, reply) => {
    const result = await controller.getStaffExperienceById(app, request)
    return reply.send(result)
  })
  app.put('/staff_experience/:id', async (request, reply) => {
    const result = await controller.updateStaffExperience(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/staff_experience/:id', async (request, reply) => {
    const result = await controller.deleteStaffExperience(app, request)
    return reply.send(result)
  })
}

export default StaffExperienceRoutes
