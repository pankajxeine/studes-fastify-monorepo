import type { CrmCronLogsRequest } from './types/CrmCronLogsRequest'
import type { CrmCronLogsResponse } from './types/CrmCronLogsResponse'
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

export interface CrmCronLogsController {
  listCrmCronLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmCronLogsResponse[]>>>
  createCrmCronLog(app: FastifyInstance, input: CrmCronLogsRequest, request?: FastifyRequest): Promise<CrmCronLogsResponse>
  getCrmCronLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmCronLogsResponse>
  updateCrmCronLog(app: FastifyInstance, input: CrmCronLogsRequest, request?: FastifyRequest): Promise<CrmCronLogsResponse>
  deleteCrmCronLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
