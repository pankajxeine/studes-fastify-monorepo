import type { PackageRoleMappingsRequest } from './types/PackageRoleMappingsRequest'
import type { PackageRoleMappingsResponse } from './types/PackageRoleMappingsResponse'
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

export interface PackageRoleMappingsController {
  listPackageRoleMappings(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageRoleMappingsResponse[]>>>
  createPackageRoleMapping(app: FastifyInstance, input: PackageRoleMappingsRequest, request?: FastifyRequest): Promise<PackageRoleMappingsResponse>
  getPackageRoleMappingsById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRoleMappingsResponse>
  updatePackageRoleMapping(app: FastifyInstance, input: PackageRoleMappingsRequest, request?: FastifyRequest): Promise<PackageRoleMappingsResponse>
  deletePackageRoleMapping(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
