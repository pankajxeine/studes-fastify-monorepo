import type { LeaveRequestCreateRequest } from '../types/LeaveRequestCreateRequest'
import type { LeaveRequest } from '../types/LeaveRequest'
import type { LeaveRequestList } from '../types/LeaveRequestList'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface LeaveController {
  listLeaveRequests(app: FastifyInstance, request?: FastifyRequest): Promise<LeaveRequestList>
  createLeaveRequest(app: FastifyInstance, input: LeaveRequestCreateRequest, request?: FastifyRequest): Promise<LeaveRequest>
}
