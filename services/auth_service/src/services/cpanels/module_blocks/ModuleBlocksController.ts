import type { ModuleBlocksRequest } from './types/ModuleBlocksRequest'
import type { ModuleBlocksResponse } from './types/ModuleBlocksResponse'
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

export interface ModuleBlocksController {
  listModuleBlocks(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ModuleBlocksResponse[]>>>
  createModuleBlock(app: FastifyInstance, input: ModuleBlocksRequest, request?: FastifyRequest): Promise<ModuleBlocksResponse>
  getModuleBlocksById(app: FastifyInstance, request?: FastifyRequest): Promise<ModuleBlocksResponse>
  updateModuleBlock(app: FastifyInstance, input: ModuleBlocksRequest, request?: FastifyRequest): Promise<ModuleBlocksResponse>
  deleteModuleBlock(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
