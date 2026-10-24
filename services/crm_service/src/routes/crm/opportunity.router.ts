import type { FastifyPluginAsync } from 'fastify'
import { OpportunityService } from '../../services/crm/opportunity/OpportunityService'

const OpportunityRoutes: FastifyPluginAsync = async (app) => {
  const controller = new OpportunityService()

  app.get('/opportunity', async (request, reply) => {
    const result = await controller.listOpportunity(app, request)
    return reply.send(result)
  })
  app.post('/opportunity', async (request, reply) => {
    const result = await controller.createOpportunity(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/opportunity/:id', async (request, reply) => {
    const result = await controller.getOpportunityById(app, request)
    return reply.send(result)
  })
  app.put('/opportunity/:id', async (request, reply) => {
    const result = await controller.updateOpportunity(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/opportunity/:id', async (request, reply) => {
    const result = await controller.deleteOpportunity(app, request)
    return reply.send(result)
  })
}

export default OpportunityRoutes
