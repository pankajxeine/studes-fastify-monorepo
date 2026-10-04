import type { CrmEmailConfigRequest } from './types/CrmEmailConfigRequest'
import type { CrmEmailConfigResponse } from './types/CrmEmailConfigResponse'
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

export interface CrmEmailConfigController {
  listCrmEmailConfig(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmEmailConfigResponse[]>>>
  createCrmEmailConfig(app: FastifyInstance, input: CrmEmailConfigRequest, request?: FastifyRequest): Promise<CrmEmailConfigResponse>
  getCrmEmailConfigById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmEmailConfigResponse>
  updateCrmEmailConfig(app: FastifyInstance, input: CrmEmailConfigRequest, request?: FastifyRequest): Promise<CrmEmailConfigResponse>
  deleteCrmEmailConfig(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
