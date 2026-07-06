import type { SubModulesRequest } from './types/SubModulesRequest'
import type { SubModulesResponse } from './types/SubModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface SubModulesController {
  listSubModules(app: FastifyInstance, request?: FastifyRequest): Promise<SubModulesResponse[]>
  createSubModule(app: FastifyInstance, input: SubModulesRequest, request?: FastifyRequest): Promise<SubModulesResponse>
  getSubModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubModulesResponse>
  updateSubModule(app: FastifyInstance, input: SubModulesRequest, request?: FastifyRequest): Promise<SubModulesResponse>
  deleteSubModule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
