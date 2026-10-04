import type { InstituteSubscriptionsRequest } from './types/InstituteSubscriptionsRequest'
import type { InstituteSubscriptionsResponse } from './types/InstituteSubscriptionsResponse'
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

export interface InstituteSubscriptionsController {
  listInstituteSubscriptions(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InstituteSubscriptionsResponse[]>>>
  createInstituteSubscription(app: FastifyInstance, input: InstituteSubscriptionsRequest, request?: FastifyRequest): Promise<InstituteSubscriptionsResponse>
  getInstituteSubscriptionsById(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteSubscriptionsResponse>
  updateInstituteSubscription(app: FastifyInstance, input: InstituteSubscriptionsRequest, request?: FastifyRequest): Promise<InstituteSubscriptionsResponse>
  deleteInstituteSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
