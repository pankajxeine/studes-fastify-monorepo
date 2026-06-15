import type { FeatureFieldsRequest } from './types/FeatureFieldsRequest'
import type { FeatureFieldsResponse } from './types/FeatureFieldsResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface FeatureFieldsController {
  listFeatureFields(app: FastifyInstance, request?: FastifyRequest): Promise<FeatureFieldsResponse[]>
  createFeatureField(app: FastifyInstance, input: FeatureFieldsRequest, request?: FastifyRequest): Promise<FeatureFieldsResponse>
  getFeatureFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<FeatureFieldsResponse>
  updateFeatureField(app: FastifyInstance, input: FeatureFieldsRequest, request?: FastifyRequest): Promise<FeatureFieldsResponse>
  deleteFeatureField(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
