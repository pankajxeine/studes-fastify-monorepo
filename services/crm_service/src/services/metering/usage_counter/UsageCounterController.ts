import type { UsageCounterRequest } from './types/UsageCounterRequest'
import type { UsageCounterUpdateRequest } from './types/UsageCounterUpdateRequest'
import type { UsageCounterResponse } from './types/UsageCounterResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface UsageCounterController {
  listUsageCounter(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UsageCounterResponse[]>>>
  createUsageCounter(app: FastifyInstance, input: UsageCounterRequest, request?: FastifyRequest): Promise<UsageCounterResponse>
  getUsageCounterById(app: FastifyInstance, request?: FastifyRequest): Promise<UsageCounterResponse>
  updateUsageCounter(app: FastifyInstance, input: UsageCounterUpdateRequest, request?: FastifyRequest): Promise<UsageCounterResponse>
  deleteUsageCounter(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
