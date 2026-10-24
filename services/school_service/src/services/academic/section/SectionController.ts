import type { SectionRequest } from './types/SectionRequest'
import type { SectionUpdateRequest } from './types/SectionUpdateRequest'
import type { SectionResponse } from './types/SectionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SectionController {
  listSection(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SectionResponse[]>>>
  createSection(app: FastifyInstance, input: SectionRequest, request?: FastifyRequest): Promise<SectionResponse>
  getSectionById(app: FastifyInstance, request?: FastifyRequest): Promise<SectionResponse>
  updateSection(app: FastifyInstance, input: SectionUpdateRequest, request?: FastifyRequest): Promise<SectionResponse>
  deleteSection(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
