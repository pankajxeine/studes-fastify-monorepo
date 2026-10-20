import type { SubscriptionPlansRequest } from './types/SubscriptionPlansRequest'
import type { SubscriptionPlansResponse } from './types/SubscriptionPlansResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface SubscriptionPlansController {
  listSubscriptionPlans(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubscriptionPlansResponse[]>>>
  createSubscriptionPlan(app: FastifyInstance, input: SubscriptionPlansRequest, request?: FastifyRequest): Promise<SubscriptionPlansResponse>
  getSubscriptionPlansById(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionPlansResponse>
  updateSubscriptionPlan(app: FastifyInstance, input: SubscriptionPlansRequest, request?: FastifyRequest): Promise<SubscriptionPlansResponse>
  deleteSubscriptionPlan(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
