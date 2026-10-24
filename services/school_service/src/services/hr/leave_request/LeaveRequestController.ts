import type { LeaveRequestRequest } from './types/LeaveRequestRequest'
import type { LeaveRequestUpdateRequest } from './types/LeaveRequestUpdateRequest'
import type { LeaveRequestResponse } from './types/LeaveRequestResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LeaveRequestController {
  listLeaveRequest(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LeaveRequestResponse[]>>>
  createLeaveRequest(app: FastifyInstance, input: LeaveRequestRequest, request?: FastifyRequest): Promise<LeaveRequestResponse>
  getLeaveRequestById(app: FastifyInstance, request?: FastifyRequest): Promise<LeaveRequestResponse>
  updateLeaveRequest(app: FastifyInstance, input: LeaveRequestUpdateRequest, request?: FastifyRequest): Promise<LeaveRequestResponse>
  deleteLeaveRequest(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
