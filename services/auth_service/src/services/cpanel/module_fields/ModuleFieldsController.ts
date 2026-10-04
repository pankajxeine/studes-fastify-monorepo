import type { ModuleFieldsRequest } from './types/ModuleFieldsRequest'
import type { ModuleFieldsResponse } from './types/ModuleFieldsResponse'
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

export interface ModuleFieldsController {
  listModuleFields(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ModuleFieldsResponse[]>>>
  createModuleField(app: FastifyInstance, input: ModuleFieldsRequest, request?: FastifyRequest): Promise<ModuleFieldsResponse>
  getModuleFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<ModuleFieldsResponse>
  updateModuleField(app: FastifyInstance, input: ModuleFieldsRequest, request?: FastifyRequest): Promise<ModuleFieldsResponse>
  deleteModuleField(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
