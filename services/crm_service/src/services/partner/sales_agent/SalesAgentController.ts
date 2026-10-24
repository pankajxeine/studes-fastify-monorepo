import type { SalesAgentRequest } from './types/SalesAgentRequest'
import type { SalesAgentUpdateRequest } from './types/SalesAgentUpdateRequest'
import type { SalesAgentResponse } from './types/SalesAgentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SalesAgentController {
  listSalesAgent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SalesAgentResponse[]>>>
  createSalesAgent(app: FastifyInstance, input: SalesAgentRequest, request?: FastifyRequest): Promise<SalesAgentResponse>
  getSalesAgentById(app: FastifyInstance, request?: FastifyRequest): Promise<SalesAgentResponse>
  updateSalesAgent(app: FastifyInstance, input: SalesAgentUpdateRequest, request?: FastifyRequest): Promise<SalesAgentResponse>
  deleteSalesAgent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
