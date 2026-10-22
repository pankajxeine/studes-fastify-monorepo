import type { AssetsLogsRequest } from './types/AssetsLogsRequest'
import type { AssetsLogsResponse } from './types/AssetsLogsResponse'
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

export interface AssetsLogsController {
  listAssetsLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AssetsLogsResponse[]>>>
  createAssetsLog(app: FastifyInstance, input: AssetsLogsRequest, request?: FastifyRequest): Promise<AssetsLogsResponse>
  getAssetsLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<AssetsLogsResponse>
  updateAssetsLog(app: FastifyInstance, input: AssetsLogsRequest, request?: FastifyRequest): Promise<AssetsLogsResponse>
  deleteAssetsLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
