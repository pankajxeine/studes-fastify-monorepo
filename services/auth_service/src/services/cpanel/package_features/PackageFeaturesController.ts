import type { PackageFeaturesRequest } from './types/PackageFeaturesRequest'
import type { PackageFeaturesResponse } from './types/PackageFeaturesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface PackageFeaturesController {
  listPackageFeatures(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeaturesResponse[]>
  createPackageFeature(app: FastifyInstance, input: PackageFeaturesRequest, request?: FastifyRequest): Promise<PackageFeaturesResponse>
  getPackageFeaturesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeaturesResponse>
  updatePackageFeature(app: FastifyInstance, input: PackageFeaturesRequest, request?: FastifyRequest): Promise<PackageFeaturesResponse>
  deletePackageFeature(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
