import type { CrmModuleBlocksRequest } from './types/CrmModuleBlocksRequest'
import type { CrmModuleBlocksResponse } from './types/CrmModuleBlocksResponse'
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

export interface CrmModuleBlocksController {
  listCrmModuleBlocks(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmModuleBlocksResponse[]>>>
  createCrmModuleBlock(app: FastifyInstance, input: CrmModuleBlocksRequest, request?: FastifyRequest): Promise<CrmModuleBlocksResponse>
  getCrmModuleBlocksById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmModuleBlocksResponse>
  updateCrmModuleBlock(app: FastifyInstance, input: CrmModuleBlocksRequest, request?: FastifyRequest): Promise<CrmModuleBlocksResponse>
  deleteCrmModuleBlock(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
