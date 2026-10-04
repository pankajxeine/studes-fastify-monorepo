import type { UserFiltersRequest } from './types/UserFiltersRequest'
import type { UserFiltersResponse } from './types/UserFiltersResponse'
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

export interface UserFiltersController {
  listUserFilters(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserFiltersResponse[]>>>
  createUserFilter(app: FastifyInstance, input: UserFiltersRequest, request?: FastifyRequest): Promise<UserFiltersResponse>
  getUserFiltersById(app: FastifyInstance, request?: FastifyRequest): Promise<UserFiltersResponse>
  updateUserFilter(app: FastifyInstance, input: UserFiltersRequest, request?: FastifyRequest): Promise<UserFiltersResponse>
  deleteUserFilter(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
