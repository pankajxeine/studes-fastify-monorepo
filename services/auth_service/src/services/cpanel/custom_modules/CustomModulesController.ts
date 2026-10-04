import type { CustomModulesRequest } from './types/CustomModulesRequest'
import type { CustomModulesResponse } from './types/CustomModulesResponse'
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

export interface CustomModulesController {
  listCustomModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomModulesResponse[]>>>
  createCustomModule(app: FastifyInstance, input: CustomModulesRequest, request?: FastifyRequest): Promise<CustomModulesResponse>
  getCustomModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomModulesResponse>
  updateCustomModule(app: FastifyInstance, input: CustomModulesRequest, request?: FastifyRequest): Promise<CustomModulesResponse>
  deleteCustomModule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
