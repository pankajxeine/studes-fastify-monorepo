import type { FastifyPluginAsync } from 'fastify'
import { AgentPlanAssignmentService } from '../../services/commission/agent_plan_assignment/AgentPlanAssignmentService'

const AgentPlanAssignmentRoutes: FastifyPluginAsync = async (app) => {
  const controller = new AgentPlanAssignmentService()

  app.get('/agent_plan_assignment', { config: {"adminPermission":"commission.agent_plan_assignment.read"} }, async (request, reply) => {
    const result = await controller.listAgentPlanAssignment(app, request)
    return reply.send(result)
  })
  app.post('/agent_plan_assignment', { config: {"adminPermission":"commission.agent_plan_assignment.create"} }, async (request, reply) => {
    const result = await controller.createAgentPlanAssignment(app, request.body as any, request)
    return reply.send(result)
  })
  app.get('/agent_plan_assignment/:agent_plan_assignment_id', { config: {"adminPermission":"commission.agent_plan_assignment.read"} }, async (request, reply) => {
    const result = await controller.getAgentPlanAssignmentById(app, request)
    return reply.send(result)
  })
  app.put('/agent_plan_assignment/:agent_plan_assignment_id', { config: {"adminPermission":"commission.agent_plan_assignment.update"} }, async (request, reply) => {
    const result = await controller.updateAgentPlanAssignment(app, request.body as any, request)
    return reply.send(result)
  })
  app.delete('/agent_plan_assignment/:agent_plan_assignment_id', { config: {"adminPermission":"commission.agent_plan_assignment.delete"} }, async (request, reply) => {
    const result = await controller.deleteAgentPlanAssignment(app, request)
    return reply.send(result)
  })
}

export default AgentPlanAssignmentRoutes
