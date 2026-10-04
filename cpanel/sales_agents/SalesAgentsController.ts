import type { SalesAgentsRequest } from './types/SalesAgentsRequest'
import type { SalesAgentsResponse } from './types/SalesAgentsResponse'
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

export interface SalesAgentsController {
  listSalesAgents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SalesAgentsResponse[]>>>
  createSalesAgent(app: FastifyInstance, input: SalesAgentsRequest, request?: FastifyRequest): Promise<SalesAgentsResponse>
  getSalesAgentsById(app: FastifyInstance, request?: FastifyRequest): Promise<SalesAgentsResponse>
  updateSalesAgent(app: FastifyInstance, input: SalesAgentsRequest, request?: FastifyRequest): Promise<SalesAgentsResponse>
  deleteSalesAgent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
