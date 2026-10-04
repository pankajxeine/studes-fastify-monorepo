import type { RunReportRequest } from './types/RunReportRequest'
import type { RunReportResponse } from './types/RunReportResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ReportsController, ListItem, PaginatedResponse } from './ReportsController'

export class ReportsService implements ReportsController {
      public async runReport(app: FastifyInstance, input: RunReportRequest, request?: FastifyRequest): Promise<RunReportResponse> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
