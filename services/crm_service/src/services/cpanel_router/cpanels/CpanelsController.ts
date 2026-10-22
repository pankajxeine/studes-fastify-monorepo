import type { CpanelsRequest } from './types/CpanelsRequest'
import type { CpanelsResponse } from './types/CpanelsResponse'
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

export interface CpanelsController {
  listCpanels(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CpanelsResponse[]>>>
  createCpanel(app: FastifyInstance, input: CpanelsRequest, request?: FastifyRequest): Promise<CpanelsResponse>
  getCpanelsById(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelsResponse>
  updateCpanel(app: FastifyInstance, input: CpanelsRequest, request?: FastifyRequest): Promise<CpanelsResponse>
  deleteCpanel(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
