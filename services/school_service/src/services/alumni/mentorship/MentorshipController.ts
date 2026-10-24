import type { MentorshipRequest } from './types/MentorshipRequest'
import type { MentorshipUpdateRequest } from './types/MentorshipUpdateRequest'
import type { MentorshipResponse } from './types/MentorshipResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MentorshipController {
  listMentorship(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MentorshipResponse[]>>>
  createMentorship(app: FastifyInstance, input: MentorshipRequest, request?: FastifyRequest): Promise<MentorshipResponse>
  getMentorshipById(app: FastifyInstance, request?: FastifyRequest): Promise<MentorshipResponse>
  updateMentorship(app: FastifyInstance, input: MentorshipUpdateRequest, request?: FastifyRequest): Promise<MentorshipResponse>
  deleteMentorship(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
