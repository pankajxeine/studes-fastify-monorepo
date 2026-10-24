import type { ModuleRequest } from './types/ModuleRequest'
import type { ModuleUpdateRequest } from './types/ModuleUpdateRequest'
import type { ModuleResponse } from './types/ModuleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ModuleController {
  listModule(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ModuleResponse[]>>>
  createModule(app: FastifyInstance, input: ModuleRequest, request?: FastifyRequest): Promise<ModuleResponse>
  getModuleById(app: FastifyInstance, request?: FastifyRequest): Promise<ModuleResponse>
  updateModule(app: FastifyInstance, input: ModuleUpdateRequest, request?: FastifyRequest): Promise<ModuleResponse>
  deleteModule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
