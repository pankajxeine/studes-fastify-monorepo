import type { FastifyPluginAsync } from 'fastify'
import { LeadService } from '../../services/crm/lead/LeadService'

const LeadRoutes: FastifyPluginAsync = async (app) => {
  const controller = new LeadService()

  app.get('/lead', async (request, reply) => {
    const result = await controller.listLead(app, request)
    return reply.send(result)
  })
  app.post('/lead', async (request, reply) => {
    const result = await controller.createLead(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/lead/:id', async (request, reply) => {
    const result = await controller.getLeadById(app, request)
    return reply.send(result)
  })
  app.put('/lead/:id', async (request, reply) => {
    const result = await controller.updateLead(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/lead/:id', async (request, reply) => {
    const result = await controller.deleteLead(app, request)
    return reply.send(result)
  })
}

export default LeadRoutes
