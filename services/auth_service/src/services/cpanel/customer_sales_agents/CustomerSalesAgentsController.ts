import type { CustomerSalesAgentsRequest } from './types/CustomerSalesAgentsRequest'
import type { CustomerSalesAgentsResponse } from './types/CustomerSalesAgentsResponse'
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

export interface CustomerSalesAgentsController {
  listCustomerSalesAgents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerSalesAgentsResponse[]>>>
  createCustomerSalesAgent(app: FastifyInstance, input: CustomerSalesAgentsRequest, request?: FastifyRequest): Promise<CustomerSalesAgentsResponse>
  getCustomerSalesAgentsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerSalesAgentsResponse>
  updateCustomerSalesAgent(app: FastifyInstance, input: CustomerSalesAgentsRequest, request?: FastifyRequest): Promise<CustomerSalesAgentsResponse>
  deleteCustomerSalesAgent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
