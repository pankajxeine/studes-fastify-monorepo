import type { CustomerStatusTimeLogsRequest } from './types/CustomerStatusTimeLogsRequest'
import type { CustomerStatusTimeLogsResponse } from './types/CustomerStatusTimeLogsResponse'
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

export interface CustomerStatusTimeLogsController {
  listCustomerStatusTimeLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerStatusTimeLogsResponse[]>>>
  createCustomerStatusTimeLog(app: FastifyInstance, input: CustomerStatusTimeLogsRequest, request?: FastifyRequest): Promise<CustomerStatusTimeLogsResponse>
  getCustomerStatusTimeLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusTimeLogsResponse>
  updateCustomerStatusTimeLog(app: FastifyInstance, input: CustomerStatusTimeLogsRequest, request?: FastifyRequest): Promise<CustomerStatusTimeLogsResponse>
  deleteCustomerStatusTimeLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
