import type { Package } from '../types/Package'
import type { CreatePackageRequest } from '../types/CreatePackageRequest'
import type { UpdatePackageRequest } from '../types/UpdatePackageRequest'
import type { PackageListResponse } from '../types/PackageListResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface PackagesController {
  listPackages(app: FastifyInstance, request?: FastifyRequest): Promise<PackageListResponse>
  createPackage(app: FastifyInstance, input: CreatePackageRequest, request?: FastifyRequest): Promise<Package>
  getPackage(app: FastifyInstance, request?: FastifyRequest): Promise<Package>
  updatePackage(app: FastifyInstance, input: UpdatePackageRequest, request?: FastifyRequest): Promise<Package>
  deletePackage(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
