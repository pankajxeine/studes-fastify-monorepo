import type { SubStoreDetailsRequest } from './types/SubStoreDetailsRequest'
import type { SubStoreDetailsResponse } from './types/SubStoreDetailsResponse'
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

export interface SubStoreDetailsController {
  listSubStoreDetails(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubStoreDetailsResponse[]>>>
  createSubStoreDetail(app: FastifyInstance, input: SubStoreDetailsRequest, request?: FastifyRequest): Promise<SubStoreDetailsResponse>
  getSubStoreDetailsById(app: FastifyInstance, request?: FastifyRequest): Promise<SubStoreDetailsResponse>
  updateSubStoreDetail(app: FastifyInstance, input: SubStoreDetailsRequest, request?: FastifyRequest): Promise<SubStoreDetailsResponse>
  deleteSubStoreDetail(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
