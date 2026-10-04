import type { PrimaryServiceRequestsRequest } from './types/PrimaryServiceRequestsRequest'
import type { PrimaryServiceRequestsResponse } from './types/PrimaryServiceRequestsResponse'
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

export interface PrimaryServiceRequestsController {
  listPrimaryServiceRequests(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PrimaryServiceRequestsResponse[]>>>
  createPrimaryServiceRequest(app: FastifyInstance, input: PrimaryServiceRequestsRequest, request?: FastifyRequest): Promise<PrimaryServiceRequestsResponse>
  getPrimaryServiceRequestsById(app: FastifyInstance, request?: FastifyRequest): Promise<PrimaryServiceRequestsResponse>
  updatePrimaryServiceRequest(app: FastifyInstance, input: PrimaryServiceRequestsRequest, request?: FastifyRequest): Promise<PrimaryServiceRequestsResponse>
  deletePrimaryServiceRequest(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
