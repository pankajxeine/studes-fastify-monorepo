import type { RunReportRequest } from './types/RunReportRequest'
import type { RunReportResponse } from './types/RunReportResponse'
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

export interface ReportsController {
  runReport(app: FastifyInstance, input: RunReportRequest, request?: FastifyRequest): Promise<RunReportResponse>
}
