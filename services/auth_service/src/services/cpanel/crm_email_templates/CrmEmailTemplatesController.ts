import type { CrmEmailTemplatesRequest } from './types/CrmEmailTemplatesRequest'
import type { CrmEmailTemplatesResponse } from './types/CrmEmailTemplatesResponse'
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

export interface CrmEmailTemplatesController {
  listCrmEmailTemplates(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmEmailTemplatesResponse[]>>>
  createCrmEmailTemplate(app: FastifyInstance, input: CrmEmailTemplatesRequest, request?: FastifyRequest): Promise<CrmEmailTemplatesResponse>
  getCrmEmailTemplatesById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmEmailTemplatesResponse>
  updateCrmEmailTemplate(app: FastifyInstance, input: CrmEmailTemplatesRequest, request?: FastifyRequest): Promise<CrmEmailTemplatesResponse>
  deleteCrmEmailTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
