import type { CrmResourceFilesRequest } from './types/CrmResourceFilesRequest'
import type { CrmResourceFilesResponse } from './types/CrmResourceFilesResponse'
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

export interface CrmResourceFilesController {
  listCrmResourceFiles(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmResourceFilesResponse[]>>>
  createCrmResourceFile(app: FastifyInstance, input: CrmResourceFilesRequest, request?: FastifyRequest): Promise<CrmResourceFilesResponse>
  getCrmResourceFilesById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmResourceFilesResponse>
  updateCrmResourceFile(app: FastifyInstance, input: CrmResourceFilesRequest, request?: FastifyRequest): Promise<CrmResourceFilesResponse>
  deleteCrmResourceFile(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
