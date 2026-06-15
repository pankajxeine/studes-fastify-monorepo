import type { PackageRoleMappingsRequest } from './types/PackageRoleMappingsRequest'
import type { PackageRoleMappingsResponse } from './types/PackageRoleMappingsResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface PackageRoleMappingsController {
  listPackageRoleMappings(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRoleMappingsResponse[]>
  createPackageRoleMapping(app: FastifyInstance, input: PackageRoleMappingsRequest, request?: FastifyRequest): Promise<PackageRoleMappingsResponse>
  getPackageRoleMappingsById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRoleMappingsResponse>
  updatePackageRoleMapping(app: FastifyInstance, input: PackageRoleMappingsRequest, request?: FastifyRequest): Promise<PackageRoleMappingsResponse>
  deletePackageRoleMapping(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
