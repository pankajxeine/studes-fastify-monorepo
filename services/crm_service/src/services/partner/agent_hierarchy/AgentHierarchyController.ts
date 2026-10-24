import type { AgentHierarchyRequest } from './types/AgentHierarchyRequest'
import type { AgentHierarchyUpdateRequest } from './types/AgentHierarchyUpdateRequest'
import type { AgentHierarchyResponse } from './types/AgentHierarchyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AgentHierarchyController {
  listAgentHierarchy(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AgentHierarchyResponse[]>>>
  createAgentHierarchy(app: FastifyInstance, input: AgentHierarchyRequest, request?: FastifyRequest): Promise<AgentHierarchyResponse>
  getAgentHierarchyById(app: FastifyInstance, request?: FastifyRequest): Promise<AgentHierarchyResponse>
  updateAgentHierarchy(app: FastifyInstance, input: AgentHierarchyUpdateRequest, request?: FastifyRequest): Promise<AgentHierarchyResponse>
  deleteAgentHierarchy(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
