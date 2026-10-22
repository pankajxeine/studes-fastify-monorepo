import type { FeatureFieldsRequest } from './types/FeatureFieldsRequest'
import type { FeatureFieldsResponse } from './types/FeatureFieldsResponse'
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

export interface FeatureFieldsController {
  listFeatureFields(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FeatureFieldsResponse[]>>>
  createFeatureField(app: FastifyInstance, input: FeatureFieldsRequest, request?: FastifyRequest): Promise<FeatureFieldsResponse>
  getFeatureFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<FeatureFieldsResponse>
  updateFeatureField(app: FastifyInstance, input: FeatureFieldsRequest, request?: FastifyRequest): Promise<FeatureFieldsResponse>
  deleteFeatureField(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
