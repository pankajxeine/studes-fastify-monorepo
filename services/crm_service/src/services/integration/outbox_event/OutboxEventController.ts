import type { OutboxEventRequest } from './types/OutboxEventRequest'
import type { OutboxEventUpdateRequest } from './types/OutboxEventUpdateRequest'
import type { OutboxEventResponse } from './types/OutboxEventResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface OutboxEventController {
  listOutboxEvent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<OutboxEventResponse[]>>>
  createOutboxEvent(app: FastifyInstance, input: OutboxEventRequest, request?: FastifyRequest): Promise<OutboxEventResponse>
  getOutboxEventById(app: FastifyInstance, request?: FastifyRequest): Promise<OutboxEventResponse>
  updateOutboxEvent(app: FastifyInstance, input: OutboxEventUpdateRequest, request?: FastifyRequest): Promise<OutboxEventResponse>
  deleteOutboxEvent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
