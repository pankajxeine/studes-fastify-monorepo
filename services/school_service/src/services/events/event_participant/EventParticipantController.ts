import type { EventParticipantRequest } from './types/EventParticipantRequest'
import type { EventParticipantUpdateRequest } from './types/EventParticipantUpdateRequest'
import type { EventParticipantResponse } from './types/EventParticipantResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface EventParticipantController {
  listEventParticipant(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EventParticipantResponse[]>>>
  createEventParticipant(app: FastifyInstance, input: EventParticipantRequest, request?: FastifyRequest): Promise<EventParticipantResponse>
  getEventParticipantById(app: FastifyInstance, request?: FastifyRequest): Promise<EventParticipantResponse>
  updateEventParticipant(app: FastifyInstance, input: EventParticipantUpdateRequest, request?: FastifyRequest): Promise<EventParticipantResponse>
  deleteEventParticipant(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
