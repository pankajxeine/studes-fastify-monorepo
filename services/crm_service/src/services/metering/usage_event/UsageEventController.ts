import type { UsageEventRequest } from './types/UsageEventRequest'
import type { UsageEventUpdateRequest } from './types/UsageEventUpdateRequest'
import type { UsageEventResponse } from './types/UsageEventResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface UsageEventController {
  listUsageEvent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UsageEventResponse[]>>>
  createUsageEvent(app: FastifyInstance, input: UsageEventRequest, request?: FastifyRequest): Promise<UsageEventResponse>
  getUsageEventById(app: FastifyInstance, request?: FastifyRequest): Promise<UsageEventResponse>
  updateUsageEvent(app: FastifyInstance, input: UsageEventUpdateRequest, request?: FastifyRequest): Promise<UsageEventResponse>
  deleteUsageEvent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
