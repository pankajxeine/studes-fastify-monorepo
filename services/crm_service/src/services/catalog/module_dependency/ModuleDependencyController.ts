import type { ModuleDependencyRequest } from './types/ModuleDependencyRequest'
import type { ModuleDependencyUpdateRequest } from './types/ModuleDependencyUpdateRequest'
import type { ModuleDependencyResponse } from './types/ModuleDependencyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ModuleDependencyController {
  listModuleDependency(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ModuleDependencyResponse[]>>>
  createModuleDependency(app: FastifyInstance, input: ModuleDependencyRequest, request?: FastifyRequest): Promise<ModuleDependencyResponse>
  getModuleDependencyById(app: FastifyInstance, request?: FastifyRequest): Promise<ModuleDependencyResponse>
  updateModuleDependency(app: FastifyInstance, input: ModuleDependencyUpdateRequest, request?: FastifyRequest): Promise<ModuleDependencyResponse>
  deleteModuleDependency(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
