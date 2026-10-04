import type { CrmEmailLogsRequest } from './types/CrmEmailLogsRequest'
import type { CrmEmailLogsResponse } from './types/CrmEmailLogsResponse'
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

export interface CrmEmailLogsController {
  listCrmEmailLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmEmailLogsResponse[]>>>
  createCrmEmailLog(app: FastifyInstance, input: CrmEmailLogsRequest, request?: FastifyRequest): Promise<CrmEmailLogsResponse>
  getCrmEmailLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmEmailLogsResponse>
  updateCrmEmailLog(app: FastifyInstance, input: CrmEmailLogsRequest, request?: FastifyRequest): Promise<CrmEmailLogsResponse>
  deleteCrmEmailLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
