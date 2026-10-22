import type { CrmResourceFoldersRequest } from './types/CrmResourceFoldersRequest'
import type { CrmResourceFoldersResponse } from './types/CrmResourceFoldersResponse'
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

export interface CrmResourceFoldersController {
  listCrmResourceFolders(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmResourceFoldersResponse[]>>>
  createCrmResourceFolder(app: FastifyInstance, input: CrmResourceFoldersRequest, request?: FastifyRequest): Promise<CrmResourceFoldersResponse>
  getCrmResourceFoldersById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmResourceFoldersResponse>
  updateCrmResourceFolder(app: FastifyInstance, input: CrmResourceFoldersRequest, request?: FastifyRequest): Promise<CrmResourceFoldersResponse>
  deleteCrmResourceFolder(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
