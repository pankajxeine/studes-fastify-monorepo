import type { LeaveRequestCreateRequest } from './types/LeaveRequestCreateRequest'
import type { LeaveRequest } from './types/LeaveRequest'
import type { LeaveRequestList } from './types/LeaveRequestList'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { LeaveController, ListItem, PaginatedResponse } from './LeaveController'

export class LeaveService implements LeaveController {
      public async listLeaveRequests(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LeaveRequestList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createLeaveRequest(app: FastifyInstance, input: LeaveRequestCreateRequest, request?: FastifyRequest): Promise<LeaveRequest> {
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
