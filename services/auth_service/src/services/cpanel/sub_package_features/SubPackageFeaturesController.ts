import type { SubPackageFeaturesRequest } from './types/SubPackageFeaturesRequest'
import type { SubPackageFeaturesResponse } from './types/SubPackageFeaturesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface SubPackageFeaturesController {
  listSubPackageFeatures(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeaturesResponse[]>
  createSubPackageFeature(app: FastifyInstance, input: SubPackageFeaturesRequest, request?: FastifyRequest): Promise<SubPackageFeaturesResponse>
  getSubPackageFeaturesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeaturesResponse>
  updateSubPackageFeature(app: FastifyInstance, input: SubPackageFeaturesRequest, request?: FastifyRequest): Promise<SubPackageFeaturesResponse>
  deleteSubPackageFeature(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
