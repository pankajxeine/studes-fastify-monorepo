import type { SubsRequest } from './types/SubsRequest'
import type { SubsResponse } from './types/SubsResponse'
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

export interface SubsController {
  listSubs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubsResponse[]>>>
  createSub(app: FastifyInstance, input: SubsRequest, request?: FastifyRequest): Promise<SubsResponse>
  getSubsById(app: FastifyInstance, request?: FastifyRequest): Promise<SubsResponse>
  updateSub(app: FastifyInstance, input: SubsRequest, request?: FastifyRequest): Promise<SubsResponse>
  deleteSub(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
