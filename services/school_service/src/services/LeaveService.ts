import type { LeaveRequestCreateRequest } from '../openapi/types/LeaveRequestCreateRequest'
import type { LeaveRequest } from '../openapi/types/LeaveRequest'
import type { LeaveRequestList } from '../openapi/types/LeaveRequestList'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { LeaveController } from '../openapi/controller/LeaveController'

export class LeaveService implements LeaveController {
  public async listLeaveRequests(app: FastifyInstance,request?: FastifyRequest): Promise<LeaveRequestList> {
    void request
    throw new Error('Not implemented')
  }

  public async createLeaveRequest(app: FastifyInstance, input: LeaveRequestCreateRequest, request?: FastifyRequest): Promise<LeaveRequest> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
