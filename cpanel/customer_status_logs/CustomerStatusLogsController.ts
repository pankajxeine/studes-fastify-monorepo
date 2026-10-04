import type { CustomerStatusLogsRequest } from './types/CustomerStatusLogsRequest'
import type { CustomerStatusLogsResponse } from './types/CustomerStatusLogsResponse'
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

export interface CustomerStatusLogsController {
  listCustomerStatusLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerStatusLogsResponse[]>>>
  createCustomerStatusLog(app: FastifyInstance, input: CustomerStatusLogsRequest, request?: FastifyRequest): Promise<CustomerStatusLogsResponse>
  getCustomerStatusLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusLogsResponse>
  updateCustomerStatusLog(app: FastifyInstance, input: CustomerStatusLogsRequest, request?: FastifyRequest): Promise<CustomerStatusLogsResponse>
  deleteCustomerStatusLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
