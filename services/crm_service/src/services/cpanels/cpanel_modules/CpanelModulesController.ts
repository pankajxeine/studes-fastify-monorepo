import type { CpanelModulesRequest } from './types/CpanelModulesRequest'
import type { CpanelModulesResponse } from './types/CpanelModulesResponse'
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

export interface CpanelModulesController {
  listCpanelModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CpanelModulesResponse[]>>>
  createCpanelModule(app: FastifyInstance, input: CpanelModulesRequest, request?: FastifyRequest): Promise<CpanelModulesResponse>
  getCpanelModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelModulesResponse>
  updateCpanelModule(app: FastifyInstance, input: CpanelModulesRequest, request?: FastifyRequest): Promise<CpanelModulesResponse>
  deleteCpanelModule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
