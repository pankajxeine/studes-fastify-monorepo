import type { CustomerNumbersRequest } from './types/CustomerNumbersRequest'
import type { CustomerNumbersResponse } from './types/CustomerNumbersResponse'
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

export interface CustomerNumbersController {
  listCustomerNumbers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerNumbersResponse[]>>>
  createCustomerNumber(app: FastifyInstance, input: CustomerNumbersRequest, request?: FastifyRequest): Promise<CustomerNumbersResponse>
  getCustomerNumbersById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerNumbersResponse>
  updateCustomerNumber(app: FastifyInstance, input: CustomerNumbersRequest, request?: FastifyRequest): Promise<CustomerNumbersResponse>
  deleteCustomerNumber(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
