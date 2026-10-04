import type { SubModulesRequest } from './types/SubModulesRequest'
import type { SubModulesResponse } from './types/SubModulesResponse'
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

export interface SubModulesController {
  listSubModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubModulesResponse[]>>>
  createSubModule(app: FastifyInstance, input: SubModulesRequest, request?: FastifyRequest): Promise<SubModulesResponse>
  getSubModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubModulesResponse>
  updateSubModule(app: FastifyInstance, input: SubModulesRequest, request?: FastifyRequest): Promise<SubModulesResponse>
  deleteSubModule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
