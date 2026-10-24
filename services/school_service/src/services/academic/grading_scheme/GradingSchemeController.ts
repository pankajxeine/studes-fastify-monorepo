import type { GradingSchemeRequest } from './types/GradingSchemeRequest'
import type { GradingSchemeUpdateRequest } from './types/GradingSchemeUpdateRequest'
import type { GradingSchemeResponse } from './types/GradingSchemeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface GradingSchemeController {
  listGradingScheme(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GradingSchemeResponse[]>>>
  createGradingScheme(app: FastifyInstance, input: GradingSchemeRequest, request?: FastifyRequest): Promise<GradingSchemeResponse>
  getGradingSchemeById(app: FastifyInstance, request?: FastifyRequest): Promise<GradingSchemeResponse>
  updateGradingScheme(app: FastifyInstance, input: GradingSchemeUpdateRequest, request?: FastifyRequest): Promise<GradingSchemeResponse>
  deleteGradingScheme(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
