import type { FastifyPluginAsync } from 'fastify'
import { AdmissionCycleService } from '../../services/admission/admission_cycle/AdmissionCycleService'

const AdmissionCycleRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AdmissionCycleService()

  app.get('/admission_cycle', async (request, reply) => {
    const result = await controller.listAdmissionCycle(app, request)
    return reply.send(result)
  })
  app.post('/admission_cycle', async (request, reply) => {
    const result = await controller.createAdmissionCycle(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/admission_cycle/:id', async (request, reply) => {
    const result = await controller.getAdmissionCycleById(app, request)
    return reply.send(result)
  })
  app.put('/admission_cycle/:id', async (request, reply) => {
    const result = await controller.updateAdmissionCycle(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/admission_cycle/:id', async (request, reply) => {
    const result = await controller.deleteAdmissionCycle(app, request)
    return reply.send(result)
  })
}

export default AdmissionCycleRoutes
