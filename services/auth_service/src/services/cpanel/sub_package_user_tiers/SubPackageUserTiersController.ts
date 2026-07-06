import type { SubPackageUserTiersRequest } from './types/SubPackageUserTiersRequest'
import type { SubPackageUserTiersResponse } from './types/SubPackageUserTiersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface SubPackageUserTiersController {
  listSubPackageUserTiers(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageUserTiersResponse[]>
  createSubPackageUserTier(app: FastifyInstance, input: SubPackageUserTiersRequest, request?: FastifyRequest): Promise<SubPackageUserTiersResponse>
  getSubPackageUserTiersById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageUserTiersResponse>
  updateSubPackageUserTier(app: FastifyInstance, input: SubPackageUserTiersRequest, request?: FastifyRequest): Promise<SubPackageUserTiersResponse>
  deleteSubPackageUserTier(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
