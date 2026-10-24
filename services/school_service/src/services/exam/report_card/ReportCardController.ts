import type { ReportCardRequest } from './types/ReportCardRequest'
import type { ReportCardUpdateRequest } from './types/ReportCardUpdateRequest'
import type { ReportCardResponse } from './types/ReportCardResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ReportCardController {
  listReportCard(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ReportCardResponse[]>>>
  createReportCard(app: FastifyInstance, input: ReportCardRequest, request?: FastifyRequest): Promise<ReportCardResponse>
  getReportCardById(app: FastifyInstance, request?: FastifyRequest): Promise<ReportCardResponse>
  updateReportCard(app: FastifyInstance, input: ReportCardUpdateRequest, request?: FastifyRequest): Promise<ReportCardResponse>
  deleteReportCard(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
