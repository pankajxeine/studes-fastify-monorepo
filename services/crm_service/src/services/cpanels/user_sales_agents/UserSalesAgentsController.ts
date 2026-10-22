import type { UserSalesAgentsRequest } from './types/UserSalesAgentsRequest'
import type { UserSalesAgentsResponse } from './types/UserSalesAgentsResponse'
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

export interface UserSalesAgentsController {
  listUserSalesAgents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserSalesAgentsResponse[]>>>
  createUserSalesAgent(app: FastifyInstance, input: UserSalesAgentsRequest, request?: FastifyRequest): Promise<UserSalesAgentsResponse>
  getUserSalesAgentsById(app: FastifyInstance, request?: FastifyRequest): Promise<UserSalesAgentsResponse>
  updateUserSalesAgent(app: FastifyInstance, input: UserSalesAgentsRequest, request?: FastifyRequest): Promise<UserSalesAgentsResponse>
  deleteUserSalesAgent(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
