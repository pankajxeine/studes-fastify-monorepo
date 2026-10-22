import type { CrmUserModulesRequest } from './types/CrmUserModulesRequest'
import type { CrmUserModulesResponse } from './types/CrmUserModulesResponse'
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

export interface CrmUserModulesController {
  listCrmUserModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmUserModulesResponse[]>>>
  createCrmUserModule(app: FastifyInstance, input: CrmUserModulesRequest, request?: FastifyRequest): Promise<CrmUserModulesResponse>
  getCrmUserModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmUserModulesResponse>
  updateCrmUserModule(app: FastifyInstance, input: CrmUserModulesRequest, request?: FastifyRequest): Promise<CrmUserModulesResponse>
  deleteCrmUserModule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
