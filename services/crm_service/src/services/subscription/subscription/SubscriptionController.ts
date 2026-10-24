import type { SubscriptionRequest } from './types/SubscriptionRequest'
import type { SubscriptionUpdateRequest } from './types/SubscriptionUpdateRequest'
import type { SubscriptionResponse } from './types/SubscriptionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SubscriptionController {
  listSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubscriptionResponse[]>>>
  createSubscription(app: FastifyInstance, input: SubscriptionRequest, request?: FastifyRequest): Promise<SubscriptionResponse>
  getSubscriptionById(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionResponse>
  updateSubscription(app: FastifyInstance, input: SubscriptionUpdateRequest, request?: FastifyRequest): Promise<SubscriptionResponse>
  deleteSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
