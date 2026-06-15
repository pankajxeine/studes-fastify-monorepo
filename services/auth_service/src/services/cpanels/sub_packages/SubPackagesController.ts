import type { SubPackagesRequest } from './types/SubPackagesRequest'
import type { SubPackagesResponse } from './types/SubPackagesResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface SubPackagesController {
  listSubPackages(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackagesResponse[]>
  createSubPackage(app: FastifyInstance, input: SubPackagesRequest, request?: FastifyRequest): Promise<SubPackagesResponse>
  getSubPackagesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackagesResponse>
  updateSubPackage(app: FastifyInstance, input: SubPackagesRequest, request?: FastifyRequest): Promise<SubPackagesResponse>
  deleteSubPackage(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
