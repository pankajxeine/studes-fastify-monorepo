import type { IndustriesRequest } from './types/IndustriesRequest'
import type { IndustriesResponse } from './types/IndustriesResponse'
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

export interface IndustriesController {
  listIndustries(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IndustriesResponse[]>>>
  createIndustrie(app: FastifyInstance, input: IndustriesRequest, request?: FastifyRequest): Promise<IndustriesResponse>
  getIndustriesById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustriesResponse>
  updateIndustrie(app: FastifyInstance, input: IndustriesRequest, request?: FastifyRequest): Promise<IndustriesResponse>
  deleteIndustrie(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
