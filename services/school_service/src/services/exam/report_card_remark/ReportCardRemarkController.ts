import type { ReportCardRemarkRequest } from './types/ReportCardRemarkRequest'
import type { ReportCardRemarkUpdateRequest } from './types/ReportCardRemarkUpdateRequest'
import type { ReportCardRemarkResponse } from './types/ReportCardRemarkResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ReportCardRemarkController {
  listReportCardRemark(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ReportCardRemarkResponse[]>>>
  createReportCardRemark(app: FastifyInstance, input: ReportCardRemarkRequest, request?: FastifyRequest): Promise<ReportCardRemarkResponse>
  getReportCardRemarkById(app: FastifyInstance, request?: FastifyRequest): Promise<ReportCardRemarkResponse>
  updateReportCardRemark(app: FastifyInstance, input: ReportCardRemarkUpdateRequest, request?: FastifyRequest): Promise<ReportCardRemarkResponse>
  deleteReportCardRemark(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
