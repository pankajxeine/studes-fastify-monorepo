import type { CrmUserModuleBlocksRequest } from './types/CrmUserModuleBlocksRequest'
import type { CrmUserModuleBlocksResponse } from './types/CrmUserModuleBlocksResponse'
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

export interface CrmUserModuleBlocksController {
  listCrmUserModuleBlocks(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmUserModuleBlocksResponse[]>>>
  createCrmUserModuleBlock(app: FastifyInstance, input: CrmUserModuleBlocksRequest, request?: FastifyRequest): Promise<CrmUserModuleBlocksResponse>
  getCrmUserModuleBlocksById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmUserModuleBlocksResponse>
  updateCrmUserModuleBlock(app: FastifyInstance, input: CrmUserModuleBlocksRequest, request?: FastifyRequest): Promise<CrmUserModuleBlocksResponse>
  deleteCrmUserModuleBlock(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
