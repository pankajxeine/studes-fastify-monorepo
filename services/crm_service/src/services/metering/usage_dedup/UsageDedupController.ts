import type { UsageDedupRequest } from './types/UsageDedupRequest'
import type { UsageDedupUpdateRequest } from './types/UsageDedupUpdateRequest'
import type { UsageDedupResponse } from './types/UsageDedupResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface UsageDedupController {
  listUsageDedup(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UsageDedupResponse[]>>>
  createUsageDedup(app: FastifyInstance, input: UsageDedupRequest, request?: FastifyRequest): Promise<UsageDedupResponse>
  getUsageDedupById(app: FastifyInstance, request?: FastifyRequest): Promise<UsageDedupResponse>
  updateUsageDedup(app: FastifyInstance, input: UsageDedupUpdateRequest, request?: FastifyRequest): Promise<UsageDedupResponse>
  deleteUsageDedup(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
