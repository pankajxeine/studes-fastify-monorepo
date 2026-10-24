import type { ScholarshipRequest } from './types/ScholarshipRequest'
import type { ScholarshipUpdateRequest } from './types/ScholarshipUpdateRequest'
import type { ScholarshipResponse } from './types/ScholarshipResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ScholarshipController {
  listScholarship(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ScholarshipResponse[]>>>
  createScholarship(app: FastifyInstance, input: ScholarshipRequest, request?: FastifyRequest): Promise<ScholarshipResponse>
  getScholarshipById(app: FastifyInstance, request?: FastifyRequest): Promise<ScholarshipResponse>
  updateScholarship(app: FastifyInstance, input: ScholarshipUpdateRequest, request?: FastifyRequest): Promise<ScholarshipResponse>
  deleteScholarship(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
