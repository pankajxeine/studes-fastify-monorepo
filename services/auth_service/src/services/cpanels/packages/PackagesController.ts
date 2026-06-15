import type { PackagesRequest } from './types/PackagesRequest'
import type { PackagesResponse } from './types/PackagesResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface PackagesController {
  listPackages(app: FastifyInstance, request?: FastifyRequest): Promise<PackagesResponse[]>
  createPackage(app: FastifyInstance, input: PackagesRequest, request?: FastifyRequest): Promise<PackagesResponse>
  getPackagesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackagesResponse>
  updatePackage(app: FastifyInstance, input: PackagesRequest, request?: FastifyRequest): Promise<PackagesResponse>
  deletePackage(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
