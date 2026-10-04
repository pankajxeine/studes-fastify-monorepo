import type { PackageRolesRequest } from './types/PackageRolesRequest'
import type { PackageRolesResponse } from './types/PackageRolesResponse'
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

export interface PackageRolesController {
  listPackageRoles(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageRolesResponse[]>>>
  createPackageRole(app: FastifyInstance, input: PackageRolesRequest, request?: FastifyRequest): Promise<PackageRolesResponse>
  getPackageRolesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRolesResponse>
  updatePackageRole(app: FastifyInstance, input: PackageRolesRequest, request?: FastifyRequest): Promise<PackageRolesResponse>
  deletePackageRole(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
