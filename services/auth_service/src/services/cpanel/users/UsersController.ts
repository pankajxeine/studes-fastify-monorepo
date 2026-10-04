import type { UsersRequest } from './types/UsersRequest'
import type { UsersResponse } from './types/UsersResponse'
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

export interface UsersController {
  listUsers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UsersResponse[]>>>
  createUser(app: FastifyInstance, input: UsersRequest, request?: FastifyRequest): Promise<UsersResponse>
  getUsersById(app: FastifyInstance, request?: FastifyRequest): Promise<UsersResponse>
  updateUser(app: FastifyInstance, input: UsersRequest, request?: FastifyRequest): Promise<UsersResponse>
  deleteUser(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
