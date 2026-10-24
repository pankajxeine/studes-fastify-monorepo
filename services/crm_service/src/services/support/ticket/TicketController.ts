import type { TicketRequest } from './types/TicketRequest'
import type { TicketUpdateRequest } from './types/TicketUpdateRequest'
import type { TicketResponse } from './types/TicketResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TicketController {
  listTicket(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TicketResponse[]>>>
  createTicket(app: FastifyInstance, input: TicketRequest, request?: FastifyRequest): Promise<TicketResponse>
  getTicketById(app: FastifyInstance, request?: FastifyRequest): Promise<TicketResponse>
  updateTicket(app: FastifyInstance, input: TicketUpdateRequest, request?: FastifyRequest): Promise<TicketResponse>
  deleteTicket(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
