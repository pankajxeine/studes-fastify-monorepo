import type { UserDefaultFiltersRequest } from './types/UserDefaultFiltersRequest'
import type { UserDefaultFiltersResponse } from './types/UserDefaultFiltersResponse'
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

export interface UserDefaultFiltersController {
  listUserDefaultFilters(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserDefaultFiltersResponse[]>>>
  createUserDefaultFilter(app: FastifyInstance, input: UserDefaultFiltersRequest, request?: FastifyRequest): Promise<UserDefaultFiltersResponse>
  getUserDefaultFiltersById(app: FastifyInstance, request?: FastifyRequest): Promise<UserDefaultFiltersResponse>
  updateUserDefaultFilter(app: FastifyInstance, input: UserDefaultFiltersRequest, request?: FastifyRequest): Promise<UserDefaultFiltersResponse>
  deleteUserDefaultFilter(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
