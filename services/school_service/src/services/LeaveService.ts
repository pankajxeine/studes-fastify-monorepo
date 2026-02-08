import type { LeaveRequestCreateRequest } from '../openapi/types/LeaveRequestCreateRequest'
import type { LeaveRequest } from '../openapi/types/LeaveRequest'
import type { LeaveRequestList } from '../openapi/types/LeaveRequestList'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { LeaveController } from '../openapi/controller/LeaveController'

export class LeaveService implements LeaveController {
  public async listLeaveRequests(headers?: RequestHeaders): Promise<LeaveRequestList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createLeaveRequest(input: LeaveRequestCreateRequest, headers?: RequestHeaders): Promise<LeaveRequest> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
