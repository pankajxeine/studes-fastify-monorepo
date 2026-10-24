import type { SubscriptionDiscountRequest } from './types/SubscriptionDiscountRequest'
import type { SubscriptionDiscountUpdateRequest } from './types/SubscriptionDiscountUpdateRequest'
import type { SubscriptionDiscountResponse } from './types/SubscriptionDiscountResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SubscriptionDiscountController {
  listSubscriptionDiscount(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubscriptionDiscountResponse[]>>>
  createSubscriptionDiscount(app: FastifyInstance, input: SubscriptionDiscountRequest, request?: FastifyRequest): Promise<SubscriptionDiscountResponse>
  getSubscriptionDiscountById(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionDiscountResponse>
  updateSubscriptionDiscount(app: FastifyInstance, input: SubscriptionDiscountUpdateRequest, request?: FastifyRequest): Promise<SubscriptionDiscountResponse>
  deleteSubscriptionDiscount(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
