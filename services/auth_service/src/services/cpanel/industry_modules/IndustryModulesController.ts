import type { IndustryModulesRequest } from './types/IndustryModulesRequest'
import type { IndustryModulesResponse } from './types/IndustryModulesResponse'
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

export interface IndustryModulesController {
  listIndustryModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IndustryModulesResponse[]>>>
  createIndustryModule(app: FastifyInstance, input: IndustryModulesRequest, request?: FastifyRequest): Promise<IndustryModulesResponse>
  getIndustryModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryModulesResponse>
  updateIndustryModule(app: FastifyInstance, input: IndustryModulesRequest, request?: FastifyRequest): Promise<IndustryModulesResponse>
  deleteIndustryModule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
