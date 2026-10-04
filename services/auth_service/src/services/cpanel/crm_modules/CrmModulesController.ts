import type { CrmModulesRequest } from './types/CrmModulesRequest'
import type { CrmModulesResponse } from './types/CrmModulesResponse'
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

export interface CrmModulesController {
  listCrmModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmModulesResponse[]>>>
  createCrmModule(app: FastifyInstance, input: CrmModulesRequest, request?: FastifyRequest): Promise<CrmModulesResponse>
  getCrmModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmModulesResponse>
  updateCrmModule(app: FastifyInstance, input: CrmModulesRequest, request?: FastifyRequest): Promise<CrmModulesResponse>
  deleteCrmModule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
