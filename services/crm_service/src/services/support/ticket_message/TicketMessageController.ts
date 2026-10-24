import type { TicketMessageRequest } from './types/TicketMessageRequest'
import type { TicketMessageUpdateRequest } from './types/TicketMessageUpdateRequest'
import type { TicketMessageResponse } from './types/TicketMessageResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TicketMessageController {
  listTicketMessage(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TicketMessageResponse[]>>>
  createTicketMessage(app: FastifyInstance, input: TicketMessageRequest, request?: FastifyRequest): Promise<TicketMessageResponse>
  getTicketMessageById(app: FastifyInstance, request?: FastifyRequest): Promise<TicketMessageResponse>
  updateTicketMessage(app: FastifyInstance, input: TicketMessageUpdateRequest, request?: FastifyRequest): Promise<TicketMessageResponse>
  deleteTicketMessage(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
