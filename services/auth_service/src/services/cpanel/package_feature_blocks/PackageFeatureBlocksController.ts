import type { PackageFeatureBlocksRequest } from './types/PackageFeatureBlocksRequest'
import type { PackageFeatureBlocksResponse } from './types/PackageFeatureBlocksResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface PackageFeatureBlocksController {
  listPackageFeatureBlocks(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeatureBlocksResponse[]>
  createPackageFeatureBlock(app: FastifyInstance, input: PackageFeatureBlocksRequest, request?: FastifyRequest): Promise<PackageFeatureBlocksResponse>
  getPackageFeatureBlocksById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeatureBlocksResponse>
  updatePackageFeatureBlock(app: FastifyInstance, input: PackageFeatureBlocksRequest, request?: FastifyRequest): Promise<PackageFeatureBlocksResponse>
  deletePackageFeatureBlock(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
