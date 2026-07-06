import type { PackageRolesRequest } from './types/PackageRolesRequest'
import type { PackageRolesResponse } from './types/PackageRolesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface PackageRolesController {
  listPackageRoles(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRolesResponse[]>
  createPackageRole(app: FastifyInstance, input: PackageRolesRequest, request?: FastifyRequest): Promise<PackageRolesResponse>
  getPackageRolesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRolesResponse>
  updatePackageRole(app: FastifyInstance, input: PackageRolesRequest, request?: FastifyRequest): Promise<PackageRolesResponse>
  deletePackageRole(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
