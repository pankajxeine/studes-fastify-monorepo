import type { PackageRoleFeaturePermissionsRequest } from './types/PackageRoleFeaturePermissionsRequest'
import type { PackageRoleFeaturePermissionsResponse } from './types/PackageRoleFeaturePermissionsResponse'
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

export interface PackageRoleFeaturePermissionsController {
  listPackageRoleFeaturePermissions(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageRoleFeaturePermissionsResponse[]>>>
  createPackageRoleFeaturePermission(app: FastifyInstance, input: PackageRoleFeaturePermissionsRequest, request?: FastifyRequest): Promise<PackageRoleFeaturePermissionsResponse>
  getPackageRoleFeaturePermissionsById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRoleFeaturePermissionsResponse>
  updatePackageRoleFeaturePermission(app: FastifyInstance, input: PackageRoleFeaturePermissionsRequest, request?: FastifyRequest): Promise<PackageRoleFeaturePermissionsResponse>
  deletePackageRoleFeaturePermission(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
