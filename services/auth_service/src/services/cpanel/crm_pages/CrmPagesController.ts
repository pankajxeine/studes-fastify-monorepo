import type { CrmPagesRequest } from './types/CrmPagesRequest'
import type { CrmPagesResponse } from './types/CrmPagesResponse'
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

export interface CrmPagesController {
  listCrmPages(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmPagesResponse[]>>>
  createCrmPage(app: FastifyInstance, input: CrmPagesRequest, request?: FastifyRequest): Promise<CrmPagesResponse>
  getCrmPagesById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmPagesResponse>
  updateCrmPage(app: FastifyInstance, input: CrmPagesRequest, request?: FastifyRequest): Promise<CrmPagesResponse>
  deleteCrmPage(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
