import type { FastifyPluginAsync } from 'fastify'
import { IncidentService } from '../../services/discipline/incident/IncidentService'

const IncidentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IncidentService()

  app.get('/incident', async (request, reply) => {
    const result = await controller.listIncident(app, request)
    return reply.send(result)
  })
  app.post('/incident', async (request, reply) => {
    const result = await controller.createIncident(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/incident/:id', async (request, reply) => {
    const result = await controller.getIncidentById(app, request)
    return reply.send(result)
  })
  app.put('/incident/:id', async (request, reply) => {
    const result = await controller.updateIncident(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/incident/:id', async (request, reply) => {
    const result = await controller.deleteIncident(app, request)
    return reply.send(result)
  })
}

export default IncidentRoutes
