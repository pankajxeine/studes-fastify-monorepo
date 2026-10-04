import type { FilterModuleFieldsRequest } from './types/FilterModuleFieldsRequest'
import type { FilterModuleFieldsResponse } from './types/FilterModuleFieldsResponse'
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

export interface FilterModuleFieldsController {
  listFilterModuleFields(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FilterModuleFieldsResponse[]>>>
  createFilterModuleField(app: FastifyInstance, input: FilterModuleFieldsRequest, request?: FastifyRequest): Promise<FilterModuleFieldsResponse>
  getFilterModuleFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<FilterModuleFieldsResponse>
  updateFilterModuleField(app: FastifyInstance, input: FilterModuleFieldsRequest, request?: FastifyRequest): Promise<FilterModuleFieldsResponse>
  deleteFilterModuleField(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
