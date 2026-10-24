import type { FastifyPluginAsync } from 'fastify'
import { IncidentPartyService } from '../../services/discipline/incident_party/IncidentPartyService'

const IncidentPartyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new IncidentPartyService()

  app.get('/incident_party', async (request, reply) => {
    const result = await controller.listIncidentParty(app, request)
    return reply.send(result)
  })
  app.post('/incident_party', async (request, reply) => {
    const result = await controller.createIncidentParty(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/incident_party/:id', async (request, reply) => {
    const result = await controller.getIncidentPartyById(app, request)
    return reply.send(result)
  })
  app.put('/incident_party/:id', async (request, reply) => {
    const result = await controller.updateIncidentParty(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/incident_party/:id', async (request, reply) => {
    const result = await controller.deleteIncidentParty(app, request)
    return reply.send(result)
  })
}

export default IncidentPartyRoutes
