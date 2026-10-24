import type { OpportunityRequest } from './types/OpportunityRequest'
import type { OpportunityUpdateRequest } from './types/OpportunityUpdateRequest'
import type { OpportunityResponse } from './types/OpportunityResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface OpportunityController {
  listOpportunity(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<OpportunityResponse[]>>>
  createOpportunity(app: FastifyInstance, input: OpportunityRequest, request?: FastifyRequest): Promise<OpportunityResponse>
  getOpportunityById(app: FastifyInstance, request?: FastifyRequest): Promise<OpportunityResponse>
  updateOpportunity(app: FastifyInstance, input: OpportunityUpdateRequest, request?: FastifyRequest): Promise<OpportunityResponse>
  deleteOpportunity(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
