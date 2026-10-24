import type { InboxEventRequest } from './types/InboxEventRequest'
import type { InboxEventUpdateRequest } from './types/InboxEventUpdateRequest'
import type { InboxEventResponse } from './types/InboxEventResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface InboxEventController {
  listInboxEvent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InboxEventResponse[]>>>
  createInboxEvent(app: FastifyInstance, input: InboxEventRequest, request?: FastifyRequest): Promise<InboxEventResponse>
  getInboxEventById(app: FastifyInstance, request?: FastifyRequest): Promise<InboxEventResponse>
  updateInboxEvent(app: FastifyInstance, input: InboxEventUpdateRequest, request?: FastifyRequest): Promise<InboxEventResponse>
  deleteInboxEvent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
