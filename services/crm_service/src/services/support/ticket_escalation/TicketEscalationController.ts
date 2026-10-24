import type { TicketEscalationRequest } from './types/TicketEscalationRequest'
import type { TicketEscalationUpdateRequest } from './types/TicketEscalationUpdateRequest'
import type { TicketEscalationResponse } from './types/TicketEscalationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TicketEscalationController {
  listTicketEscalation(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TicketEscalationResponse[]>>>
  createTicketEscalation(app: FastifyInstance, input: TicketEscalationRequest, request?: FastifyRequest): Promise<TicketEscalationResponse>
  getTicketEscalationById(app: FastifyInstance, request?: FastifyRequest): Promise<TicketEscalationResponse>
  updateTicketEscalation(app: FastifyInstance, input: TicketEscalationUpdateRequest, request?: FastifyRequest): Promise<TicketEscalationResponse>
  deleteTicketEscalation(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
