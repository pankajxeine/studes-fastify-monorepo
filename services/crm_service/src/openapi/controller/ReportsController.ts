import type { RunReportRequest } from '../types/RunReportRequest'
import type { RunReportResponse } from '../types/RunReportResponse'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface ReportsController {
  runReport(input: RunReportRequest, headers?: RequestHeaders): Promise<RunReportResponse>
}
