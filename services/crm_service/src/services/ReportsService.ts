import type { RunReportRequest } from '../openapi/types/RunReportRequest'
import type { RunReportResponse } from '../openapi/types/RunReportResponse'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { ReportsController } from '../openapi/controller/ReportsController'

export class ReportsService implements ReportsController {
  public async runReport(input: RunReportRequest, headers?: RequestHeaders): Promise<RunReportResponse> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
