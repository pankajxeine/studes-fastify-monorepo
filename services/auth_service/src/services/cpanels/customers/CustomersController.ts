import type { CustomersRequest } from './types/CustomersRequest'
import type { CustomersResponse } from './types/CustomersResponse'
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

export interface CustomersController {
  listCustomers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomersResponse[]>>>
  createCustomer(app: FastifyInstance, input: CustomersRequest, request?: FastifyRequest): Promise<CustomersResponse>
  getCustomersById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomersResponse>
  updateCustomer(app: FastifyInstance, input: CustomersRequest, request?: FastifyRequest): Promise<CustomersResponse>
  deleteCustomer(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
