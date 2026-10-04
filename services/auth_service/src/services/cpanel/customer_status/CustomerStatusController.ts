import type { CustomerStatusRequest } from './types/CustomerStatusRequest'
import type { CustomerStatusResponse } from './types/CustomerStatusResponse'
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

export interface CustomerStatusController {
  listCustomerStatus(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerStatusResponse[]>>>
  createCustomerStatu(app: FastifyInstance, input: CustomerStatusRequest, request?: FastifyRequest): Promise<CustomerStatusResponse>
  getCustomerStatusById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusResponse>
  updateCustomerStatu(app: FastifyInstance, input: CustomerStatusRequest, request?: FastifyRequest): Promise<CustomerStatusResponse>
  deleteCustomerStatu(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
