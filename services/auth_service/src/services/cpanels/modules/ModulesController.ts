import type { ModulesRequest } from './types/ModulesRequest'
import type { ModulesResponse } from './types/ModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface ModulesController {
  listModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ModulesResponse[]>>>
  createModule(app: FastifyInstance, input: ModulesRequest, request?: FastifyRequest): Promise<ModulesResponse>
  getModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<ModulesResponse>
  updateModule(app: FastifyInstance, input: ModulesRequest, request?: FastifyRequest): Promise<ModulesResponse>
  deleteModule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
