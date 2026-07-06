import type { SubPackageFeatureBlocksRequest } from './types/SubPackageFeatureBlocksRequest'
import type { SubPackageFeatureBlocksResponse } from './types/SubPackageFeatureBlocksResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface SubPackageFeatureBlocksController {
  listSubPackageFeatureBlocks(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeatureBlocksResponse[]>
  createSubPackageFeatureBlock(app: FastifyInstance, input: SubPackageFeatureBlocksRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlocksResponse>
  getSubPackageFeatureBlocksById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeatureBlocksResponse>
  updateSubPackageFeatureBlock(app: FastifyInstance, input: SubPackageFeatureBlocksRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlocksResponse>
  deleteSubPackageFeatureBlock(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
