import type { CrmCronsRequest } from './types/CrmCronsRequest'
import type { CrmCronsResponse } from './types/CrmCronsResponse'
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

export interface CrmCronsController {
  listCrmCrons(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmCronsResponse[]>>>
  createCrmCron(app: FastifyInstance, input: CrmCronsRequest, request?: FastifyRequest): Promise<CrmCronsResponse>
  getCrmCronsById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmCronsResponse>
  updateCrmCron(app: FastifyInstance, input: CrmCronsRequest, request?: FastifyRequest): Promise<CrmCronsResponse>
  deleteCrmCron(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
