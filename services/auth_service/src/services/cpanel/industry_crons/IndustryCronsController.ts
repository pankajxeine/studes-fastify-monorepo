import type { IndustryCronsRequest } from './types/IndustryCronsRequest'
import type { IndustryCronsResponse } from './types/IndustryCronsResponse'
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

export interface IndustryCronsController {
  listIndustryCrons(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IndustryCronsResponse[]>>>
  createIndustryCron(app: FastifyInstance, input: IndustryCronsRequest, request?: FastifyRequest): Promise<IndustryCronsResponse>
  getIndustryCronsById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryCronsResponse>
  updateIndustryCron(app: FastifyInstance, input: IndustryCronsRequest, request?: FastifyRequest): Promise<IndustryCronsResponse>
  deleteIndustryCron(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
