import type { SensitiveColumnRequest } from './types/SensitiveColumnRequest'
import type { SensitiveColumnUpdateRequest } from './types/SensitiveColumnUpdateRequest'
import type { SensitiveColumnResponse } from './types/SensitiveColumnResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SensitiveColumnController {
  listSensitiveColumn(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SensitiveColumnResponse[]>>>
  createSensitiveColumn(app: FastifyInstance, input: SensitiveColumnRequest, request?: FastifyRequest): Promise<SensitiveColumnResponse>
  getSensitiveColumnById(app: FastifyInstance, request?: FastifyRequest): Promise<SensitiveColumnResponse>
  updateSensitiveColumn(app: FastifyInstance, input: SensitiveColumnUpdateRequest, request?: FastifyRequest): Promise<SensitiveColumnResponse>
  deleteSensitiveColumn(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
