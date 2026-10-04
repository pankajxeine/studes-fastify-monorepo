import type { UserServiceTicketTypesRequest } from './types/UserServiceTicketTypesRequest'
import type { UserServiceTicketTypesResponse } from './types/UserServiceTicketTypesResponse'
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

export interface UserServiceTicketTypesController {
  listUserServiceTicketTypes(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserServiceTicketTypesResponse[]>>>
  createUserServiceTicketType(app: FastifyInstance, input: UserServiceTicketTypesRequest, request?: FastifyRequest): Promise<UserServiceTicketTypesResponse>
  getUserServiceTicketTypesById(app: FastifyInstance, request?: FastifyRequest): Promise<UserServiceTicketTypesResponse>
  updateUserServiceTicketType(app: FastifyInstance, input: UserServiceTicketTypesRequest, request?: FastifyRequest): Promise<UserServiceTicketTypesResponse>
  deleteUserServiceTicketType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
