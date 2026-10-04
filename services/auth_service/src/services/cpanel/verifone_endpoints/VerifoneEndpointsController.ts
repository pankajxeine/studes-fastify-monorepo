import type { VerifoneEndpointsRequest } from './types/VerifoneEndpointsRequest'
import type { VerifoneEndpointsResponse } from './types/VerifoneEndpointsResponse'
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

export interface VerifoneEndpointsController {
  listVerifoneEndpoints(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<VerifoneEndpointsResponse[]>>>
  createVerifoneEndpoint(app: FastifyInstance, input: VerifoneEndpointsRequest, request?: FastifyRequest): Promise<VerifoneEndpointsResponse>
  getVerifoneEndpointsById(app: FastifyInstance, request?: FastifyRequest): Promise<VerifoneEndpointsResponse>
  updateVerifoneEndpoint(app: FastifyInstance, input: VerifoneEndpointsRequest, request?: FastifyRequest): Promise<VerifoneEndpointsResponse>
  deleteVerifoneEndpoint(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
