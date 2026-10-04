import type { PackageUserTiersRequest } from './types/PackageUserTiersRequest'
import type { PackageUserTiersResponse } from './types/PackageUserTiersResponse'
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

export interface PackageUserTiersController {
  listPackageUserTiers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageUserTiersResponse[]>>>
  createPackageUserTier(app: FastifyInstance, input: PackageUserTiersRequest, request?: FastifyRequest): Promise<PackageUserTiersResponse>
  getPackageUserTiersById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageUserTiersResponse>
  updatePackageUserTier(app: FastifyInstance, input: PackageUserTiersRequest, request?: FastifyRequest): Promise<PackageUserTiersResponse>
  deletePackageUserTier(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
