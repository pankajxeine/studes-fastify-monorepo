import type { EventRequest } from './types/EventRequest'
import type { EventUpdateRequest } from './types/EventUpdateRequest'
import type { EventResponse } from './types/EventResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface EventController {
  listEvent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EventResponse[]>>>
  createEvent(app: FastifyInstance, input: EventRequest, request?: FastifyRequest): Promise<EventResponse>
  getEventById(app: FastifyInstance, request?: FastifyRequest): Promise<EventResponse>
  updateEvent(app: FastifyInstance, input: EventUpdateRequest, request?: FastifyRequest): Promise<EventResponse>
  deleteEvent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
