import type { FeatureRequest } from './types/FeatureRequest'
import type { FeatureUpdateRequest } from './types/FeatureUpdateRequest'
import type { FeatureResponse } from './types/FeatureResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface FeatureController {
  listFeature(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FeatureResponse[]>>>
  createFeature(app: FastifyInstance, input: FeatureRequest, request?: FastifyRequest): Promise<FeatureResponse>
  getFeatureById(app: FastifyInstance, request?: FastifyRequest): Promise<FeatureResponse>
  updateFeature(app: FastifyInstance, input: FeatureUpdateRequest, request?: FastifyRequest): Promise<FeatureResponse>
  deleteFeature(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
