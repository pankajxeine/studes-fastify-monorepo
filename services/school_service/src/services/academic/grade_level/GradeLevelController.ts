import type { GradeLevelRequest } from './types/GradeLevelRequest'
import type { GradeLevelUpdateRequest } from './types/GradeLevelUpdateRequest'
import type { GradeLevelResponse } from './types/GradeLevelResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface GradeLevelController {
  listGradeLevel(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GradeLevelResponse[]>>>
  createGradeLevel(app: FastifyInstance, input: GradeLevelRequest, request?: FastifyRequest): Promise<GradeLevelResponse>
  getGradeLevelById(app: FastifyInstance, request?: FastifyRequest): Promise<GradeLevelResponse>
  updateGradeLevel(app: FastifyInstance, input: GradeLevelUpdateRequest, request?: FastifyRequest): Promise<GradeLevelResponse>
  deleteGradeLevel(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
