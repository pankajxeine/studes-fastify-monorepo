import type { SuppressionRequest } from './types/SuppressionRequest'
import type { SuppressionUpdateRequest } from './types/SuppressionUpdateRequest'
import type { SuppressionResponse } from './types/SuppressionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SuppressionController {
  listSuppression(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SuppressionResponse[]>>>
  createSuppression(app: FastifyInstance, input: SuppressionRequest, request?: FastifyRequest): Promise<SuppressionResponse>
  getSuppressionById(app: FastifyInstance, request?: FastifyRequest): Promise<SuppressionResponse>
  updateSuppression(app: FastifyInstance, input: SuppressionUpdateRequest, request?: FastifyRequest): Promise<SuppressionResponse>
  deleteSuppression(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
