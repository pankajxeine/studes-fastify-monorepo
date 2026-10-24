import type { LeadRequest } from './types/LeadRequest'
import type { LeadUpdateRequest } from './types/LeadUpdateRequest'
import type { LeadResponse } from './types/LeadResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LeadController {
  listLead(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LeadResponse[]>>>
  createLead(app: FastifyInstance, input: LeadRequest, request?: FastifyRequest): Promise<LeadResponse>
  getLeadById(app: FastifyInstance, request?: FastifyRequest): Promise<LeadResponse>
  updateLead(app: FastifyInstance, input: LeadUpdateRequest, request?: FastifyRequest): Promise<LeadResponse>
  deleteLead(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
