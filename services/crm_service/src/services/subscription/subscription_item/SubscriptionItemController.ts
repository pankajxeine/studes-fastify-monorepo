import type { SubscriptionItemRequest } from './types/SubscriptionItemRequest'
import type { SubscriptionItemUpdateRequest } from './types/SubscriptionItemUpdateRequest'
import type { SubscriptionItemResponse } from './types/SubscriptionItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SubscriptionItemController {
  listSubscriptionItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubscriptionItemResponse[]>>>
  createSubscriptionItem(app: FastifyInstance, input: SubscriptionItemRequest, request?: FastifyRequest): Promise<SubscriptionItemResponse>
  getSubscriptionItemById(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionItemResponse>
  updateSubscriptionItem(app: FastifyInstance, input: SubscriptionItemUpdateRequest, request?: FastifyRequest): Promise<SubscriptionItemResponse>
  deleteSubscriptionItem(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
