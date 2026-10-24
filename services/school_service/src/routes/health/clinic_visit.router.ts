import type { FastifyPluginAsync } from 'fastify'
import { ClinicVisitService } from '../../services/health/clinic_visit/ClinicVisitService'

const ClinicVisitRoutes: FastifyPluginAsync = async (app) => {
  const controller = new ClinicVisitService()

  app.get('/clinic_visit', async (request, reply) => {
    const result = await controller.listClinicVisit(app, request)
    return reply.send(result)
  })
  app.post('/clinic_visit', async (request, reply) => {
    const result = await controller.createClinicVisit(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/clinic_visit/:id', async (request, reply) => {
    const result = await controller.getClinicVisitById(app, request)
    return reply.send(result)
  })
  app.put('/clinic_visit/:id', async (request, reply) => {
    const result = await controller.updateClinicVisit(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/clinic_visit/:id', async (request, reply) => {
    const result = await controller.deleteClinicVisit(app, request)
    return reply.send(result)
  })
}

export default ClinicVisitRoutes
