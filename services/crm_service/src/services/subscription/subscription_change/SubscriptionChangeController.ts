import type { SubscriptionChangeRequest } from './types/SubscriptionChangeRequest'
import type { SubscriptionChangeUpdateRequest } from './types/SubscriptionChangeUpdateRequest'
import type { SubscriptionChangeResponse } from './types/SubscriptionChangeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SubscriptionChangeController {
  listSubscriptionChange(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubscriptionChangeResponse[]>>>
  createSubscriptionChange(app: FastifyInstance, input: SubscriptionChangeRequest, request?: FastifyRequest): Promise<SubscriptionChangeResponse>
  getSubscriptionChangeById(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionChangeResponse>
  updateSubscriptionChange(app: FastifyInstance, input: SubscriptionChangeUpdateRequest, request?: FastifyRequest): Promise<SubscriptionChangeResponse>
  deleteSubscriptionChange(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
