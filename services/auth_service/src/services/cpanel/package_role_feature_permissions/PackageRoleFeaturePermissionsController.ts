import type { PackageRoleFeaturePermissionsRequest } from './types/PackageRoleFeaturePermissionsRequest'
import type { PackageRoleFeaturePermissionsResponse } from './types/PackageRoleFeaturePermissionsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface PackageRoleFeaturePermissionsController {
  listPackageRoleFeaturePermissions(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRoleFeaturePermissionsResponse[]>
  createPackageRoleFeaturePermission(app: FastifyInstance, input: PackageRoleFeaturePermissionsRequest, request?: FastifyRequest): Promise<PackageRoleFeaturePermissionsResponse>
  getPackageRoleFeaturePermissionsById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRoleFeaturePermissionsResponse>
  updatePackageRoleFeaturePermission(app: FastifyInstance, input: PackageRoleFeaturePermissionsRequest, request?: FastifyRequest): Promise<PackageRoleFeaturePermissionsResponse>
  deletePackageRoleFeaturePermission(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
