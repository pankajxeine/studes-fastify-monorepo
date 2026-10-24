import type { FastifyPluginAsync } from 'fastify'
import { AdmissionCycleSeatService } from '../../services/admission/admission_cycle_seat/AdmissionCycleSeatService'

const AdmissionCycleSeatRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AdmissionCycleSeatService()

  app.get('/admission_cycle_seat', async (request, reply) => {
    const result = await controller.listAdmissionCycleSeat(app, request)
    return reply.send(result)
  })
  app.post('/admission_cycle_seat', async (request, reply) => {
    const result = await controller.createAdmissionCycleSeat(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/admission_cycle_seat/:id', async (request, reply) => {
    const result = await controller.getAdmissionCycleSeatById(app, request)
    return reply.send(result)
  })
  app.put('/admission_cycle_seat/:id', async (request, reply) => {
    const result = await controller.updateAdmissionCycleSeat(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/admission_cycle_seat/:id', async (request, reply) => {
    const result = await controller.deleteAdmissionCycleSeat(app, request)
    return reply.send(result)
  })
}

export default AdmissionCycleSeatRoutes
