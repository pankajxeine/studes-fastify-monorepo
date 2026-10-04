import type { PackageFeaturesRequest } from './types/PackageFeaturesRequest'
import type { PackageFeaturesResponse } from './types/PackageFeaturesResponse'
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

export interface PackageFeaturesController {
  listPackageFeatures(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageFeaturesResponse[]>>>
  createPackageFeature(app: FastifyInstance, input: PackageFeaturesRequest, request?: FastifyRequest): Promise<PackageFeaturesResponse>
  getPackageFeaturesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeaturesResponse>
  updatePackageFeature(app: FastifyInstance, input: PackageFeaturesRequest, request?: FastifyRequest): Promise<PackageFeaturesResponse>
  deletePackageFeature(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
