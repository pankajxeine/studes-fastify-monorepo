import type { RunReportRequest } from '../types/RunReportRequest'
import type { RunReportResponse } from '../types/RunReportResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface ReportsController {
  runReport(app: FastifyInstance, input: RunReportRequest, request?: FastifyRequest): Promise<RunReportResponse>
}
