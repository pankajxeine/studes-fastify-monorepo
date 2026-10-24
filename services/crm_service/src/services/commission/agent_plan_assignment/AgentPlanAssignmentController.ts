import type { AgentPlanAssignmentRequest } from './types/AgentPlanAssignmentRequest'
import type { AgentPlanAssignmentUpdateRequest } from './types/AgentPlanAssignmentUpdateRequest'
import type { AgentPlanAssignmentResponse } from './types/AgentPlanAssignmentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AgentPlanAssignmentController {
  listAgentPlanAssignment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AgentPlanAssignmentResponse[]>>>
  createAgentPlanAssignment(app: FastifyInstance, input: AgentPlanAssignmentRequest, request?: FastifyRequest): Promise<AgentPlanAssignmentResponse>
  getAgentPlanAssignmentById(app: FastifyInstance, request?: FastifyRequest): Promise<AgentPlanAssignmentResponse>
  updateAgentPlanAssignment(app: FastifyInstance, input: AgentPlanAssignmentUpdateRequest, request?: FastifyRequest): Promise<AgentPlanAssignmentResponse>
  deleteAgentPlanAssignment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
