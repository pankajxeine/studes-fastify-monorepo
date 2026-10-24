import type { InternshipRequest } from './types/InternshipRequest'
import type { InternshipUpdateRequest } from './types/InternshipUpdateRequest'
import type { InternshipResponse } from './types/InternshipResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface InternshipController {
  listInternship(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InternshipResponse[]>>>
  createInternship(app: FastifyInstance, input: InternshipRequest, request?: FastifyRequest): Promise<InternshipResponse>
  getInternshipById(app: FastifyInstance, request?: FastifyRequest): Promise<InternshipResponse>
  updateInternship(app: FastifyInstance, input: InternshipUpdateRequest, request?: FastifyRequest): Promise<InternshipResponse>
  deleteInternship(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
