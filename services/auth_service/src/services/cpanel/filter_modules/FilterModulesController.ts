import type { FilterModulesRequest } from './types/FilterModulesRequest'
import type { FilterModulesResponse } from './types/FilterModulesResponse'
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

export interface FilterModulesController {
  listFilterModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FilterModulesResponse[]>>>
  createFilterModule(app: FastifyInstance, input: FilterModulesRequest, request?: FastifyRequest): Promise<FilterModulesResponse>
  getFilterModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<FilterModulesResponse>
  updateFilterModule(app: FastifyInstance, input: FilterModulesRequest, request?: FastifyRequest): Promise<FilterModulesResponse>
  deleteFilterModule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
