import type { ThreadParticipantRequest } from './types/ThreadParticipantRequest'
import type { ThreadParticipantUpdateRequest } from './types/ThreadParticipantUpdateRequest'
import type { ThreadParticipantResponse } from './types/ThreadParticipantResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ThreadParticipantController {
  listThreadParticipant(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ThreadParticipantResponse[]>>>
  createThreadParticipant(app: FastifyInstance, input: ThreadParticipantRequest, request?: FastifyRequest): Promise<ThreadParticipantResponse>
  getThreadParticipantById(app: FastifyInstance, request?: FastifyRequest): Promise<ThreadParticipantResponse>
  updateThreadParticipant(app: FastifyInstance, input: ThreadParticipantUpdateRequest, request?: FastifyRequest): Promise<ThreadParticipantResponse>
  deleteThreadParticipant(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
