import type { RunReportRequest } from '../openapi/types/RunReportRequest'
import type { RunReportResponse } from '../openapi/types/RunReportResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ReportsController } from '../openapi/controller/ReportsController'

export class ReportsService implements ReportsController {
  public async runReport(app: FastifyInstance, input: RunReportRequest, request?: FastifyRequest): Promise<RunReportResponse> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
