import type { FeatureFlagRequest } from './types/FeatureFlagRequest'
import type { FeatureFlagUpdateRequest } from './types/FeatureFlagUpdateRequest'
import type { FeatureFlagResponse } from './types/FeatureFlagResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface FeatureFlagController {
  listFeatureFlag(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FeatureFlagResponse[]>>>
  createFeatureFlag(app: FastifyInstance, input: FeatureFlagRequest, request?: FastifyRequest): Promise<FeatureFlagResponse>
  getFeatureFlagById(app: FastifyInstance, request?: FastifyRequest): Promise<FeatureFlagResponse>
  updateFeatureFlag(app: FastifyInstance, input: FeatureFlagUpdateRequest, request?: FastifyRequest): Promise<FeatureFlagResponse>
  deleteFeatureFlag(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
