import type { PackageFeatureBlockFieldsRequest } from './types/PackageFeatureBlockFieldsRequest'
import type { PackageFeatureBlockFieldsResponse } from './types/PackageFeatureBlockFieldsResponse'
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

export interface PackageFeatureBlockFieldsController {
  listPackageFeatureBlockFields(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageFeatureBlockFieldsResponse[]>>>
  createPackageFeatureBlockField(app: FastifyInstance, input: PackageFeatureBlockFieldsRequest, request?: FastifyRequest): Promise<PackageFeatureBlockFieldsResponse>
  getPackageFeatureBlockFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeatureBlockFieldsResponse>
  updatePackageFeatureBlockField(app: FastifyInstance, input: PackageFeatureBlockFieldsRequest, request?: FastifyRequest): Promise<PackageFeatureBlockFieldsResponse>
  deletePackageFeatureBlockField(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
