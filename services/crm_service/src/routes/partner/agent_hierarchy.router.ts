import type { FastifyPluginAsync } from 'fastify'
import { AgentHierarchyService } from '../../services/partner/agent_hierarchy/AgentHierarchyService'

const AgentHierarchyRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AgentHierarchyService()

  app.get('/agent_hierarchy', { config: {"adminPermission":"partner.agent_hierarchy.read"} }, async (request, reply) => {
    const result = await controller.listAgentHierarchy(app, request)
    return reply.send(result)
  })
  app.post('/agent_hierarchy', { config: {"adminPermission":"partner.agent_hierarchy.create"} }, async (request, reply) => {
    const result = await controller.createAgentHierarchy(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/agent_hierarchy/:agent_hierarchy_id', { config: {"adminPermission":"partner.agent_hierarchy.read"} }, async (request, reply) => {
    const result = await controller.getAgentHierarchyById(app, request)
    return reply.send(result)
  })
  app.put('/agent_hierarchy/:agent_hierarchy_id', { config: {"adminPermission":"partner.agent_hierarchy.update"} }, async (request, reply) => {
    const result = await controller.updateAgentHierarchy(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/agent_hierarchy/:agent_hierarchy_id', { config: {"adminPermission":"partner.agent_hierarchy.delete"} }, async (request, reply) => {
    const result = await controller.deleteAgentHierarchy(app, request)
    return reply.send(result)
  })
}

export default AgentHierarchyRoutes
