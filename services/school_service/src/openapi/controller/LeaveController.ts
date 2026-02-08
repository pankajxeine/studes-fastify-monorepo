import type { LeaveRequestCreateRequest } from '../types/LeaveRequestCreateRequest'
import type { LeaveRequest } from '../types/LeaveRequest'
import type { LeaveRequestList } from '../types/LeaveRequestList'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface LeaveController {
  listLeaveRequests(headers?: RequestHeaders): Promise<LeaveRequestList>
  createLeaveRequest(input: LeaveRequestCreateRequest, headers?: RequestHeaders): Promise<LeaveRequest>
}
