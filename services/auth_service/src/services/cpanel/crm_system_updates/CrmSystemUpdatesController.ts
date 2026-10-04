import type { CrmSystemUpdatesRequest } from './types/CrmSystemUpdatesRequest'
import type { CrmSystemUpdatesResponse } from './types/CrmSystemUpdatesResponse'
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

export interface CrmSystemUpdatesController {
  listCrmSystemUpdates(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmSystemUpdatesResponse[]>>>
  createCrmSystemUpdate(app: FastifyInstance, input: CrmSystemUpdatesRequest, request?: FastifyRequest): Promise<CrmSystemUpdatesResponse>
  getCrmSystemUpdatesById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmSystemUpdatesResponse>
  updateCrmSystemUpdate(app: FastifyInstance, input: CrmSystemUpdatesRequest, request?: FastifyRequest): Promise<CrmSystemUpdatesResponse>
  deleteCrmSystemUpdate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
