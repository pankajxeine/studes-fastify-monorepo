import type { FastifyPluginAsync } from 'fastify'
import { MedicalProfileService } from '../../services/health/medical_profile/MedicalProfileService'

const MedicalProfileRoutes: FastifyPluginAsync = async (app) => {
  const controller = new MedicalProfileService()

  app.get('/medical_profile', async (request, reply) => {
    const result = await controller.listMedicalProfile(app, request)
    return reply.send(result)
  })
  app.post('/medical_profile', async (request, reply) => {
    const result = await controller.createMedicalProfile(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/medical_profile/:id', async (request, reply) => {
    const result = await controller.getMedicalProfileById(app, request)
    return reply.send(result)
  })
  app.put('/medical_profile/:id', async (request, reply) => {
    const result = await controller.updateMedicalProfile(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/medical_profile/:id', async (request, reply) => {
    const result = await controller.deleteMedicalProfile(app, request)
    return reply.send(result)
  })
}

export default MedicalProfileRoutes
