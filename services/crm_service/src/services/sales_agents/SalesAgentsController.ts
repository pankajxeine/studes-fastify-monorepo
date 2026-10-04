import type { SalesAgent } from './types/SalesAgent'
import type { CreateSalesAgentRequest } from './types/CreateSalesAgentRequest'
import type { UpdateSalesAgentRequest } from './types/UpdateSalesAgentRequest'
import type { SalesAgentListResponse } from './types/SalesAgentListResponse'
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
  listSalesAgents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SalesAgentListResponse>>>
  createSalesAgent(app: FastifyInstance, input: CreateSalesAgentRequest, request?: FastifyRequest): Promise<SalesAgent>
  updateSalesAgent(app: FastifyInstance, input: UpdateSalesAgentRequest, request?: FastifyRequest): Promise<SalesAgent>
}
