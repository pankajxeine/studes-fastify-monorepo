import type { BillingHistoryRequest } from './types/BillingHistoryRequest'
import type { BillingHistoryResponse } from './types/BillingHistoryResponse'
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

export interface BillingHistoryController {
  listBillingHistory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BillingHistoryResponse[]>>>
  createBillingHistory(app: FastifyInstance, input: BillingHistoryRequest, request?: FastifyRequest): Promise<BillingHistoryResponse>
  getBillingHistoryById(app: FastifyInstance, request?: FastifyRequest): Promise<BillingHistoryResponse>
  updateBillingHistory(app: FastifyInstance, input: BillingHistoryRequest, request?: FastifyRequest): Promise<BillingHistoryResponse>
  deleteBillingHistory(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
