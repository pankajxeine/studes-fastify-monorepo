import type { IncidentCategoryRequest } from './types/IncidentCategoryRequest'
import type { IncidentCategoryUpdateRequest } from './types/IncidentCategoryUpdateRequest'
import type { IncidentCategoryResponse } from './types/IncidentCategoryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface IncidentCategoryController {
  listIncidentCategory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IncidentCategoryResponse[]>>>
  createIncidentCategory(app: FastifyInstance, input: IncidentCategoryRequest, request?: FastifyRequest): Promise<IncidentCategoryResponse>
  getIncidentCategoryById(app: FastifyInstance, request?: FastifyRequest): Promise<IncidentCategoryResponse>
  updateIncidentCategory(app: FastifyInstance, input: IncidentCategoryUpdateRequest, request?: FastifyRequest): Promise<IncidentCategoryResponse>
  deleteIncidentCategory(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
