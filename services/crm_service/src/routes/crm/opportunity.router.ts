import type { FastifyPluginAsync } from 'fastify'
import { OpportunityService } from '../../services/crm/opportunity/OpportunityService'

const OpportunityRoutes: FastifyPluginAsync = async (app) => {
  const controller = new OpportunityService()

  app.get('/opportunity', { config: {"adminPermission":"crm.opportunity.read"} }, async (request, reply) => {
    const result = await controller.listOpportunity(app, request)
    return reply.send(result)
  })
  app.post('/opportunity', { config: {"adminPermission":"crm.opportunity.create"} }, async (request, reply) => {
    const result = await controller.createOpportunity(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/opportunity/:opportunity_id', { config: {"adminPermission":"crm.opportunity.read"} }, async (request, reply) => {
    const result = await controller.getOpportunityById(app, request)
    return reply.send(result)
  })
  app.put('/opportunity/:opportunity_id', { config: {"adminPermission":"crm.opportunity.update"} }, async (request, reply) => {
    const result = await controller.updateOpportunity(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/opportunity/:opportunity_id', { config: {"adminPermission":"crm.opportunity.delete"} }, async (request, reply) => {
    const result = await controller.deleteOpportunity(app, request)
    return reply.send(result)
  })
}

export default OpportunityRoutes
