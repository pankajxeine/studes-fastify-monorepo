import type { LeaveTypeRequest } from './types/LeaveTypeRequest'
import type { LeaveTypeUpdateRequest } from './types/LeaveTypeUpdateRequest'
import type { LeaveTypeResponse } from './types/LeaveTypeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LeaveTypeController {
  listLeaveType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LeaveTypeResponse[]>>>
  createLeaveType(app: FastifyInstance, input: LeaveTypeRequest, request?: FastifyRequest): Promise<LeaveTypeResponse>
  getLeaveTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<LeaveTypeResponse>
  updateLeaveType(app: FastifyInstance, input: LeaveTypeUpdateRequest, request?: FastifyRequest): Promise<LeaveTypeResponse>
  deleteLeaveType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
