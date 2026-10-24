import type { LeaveBalanceRequest } from './types/LeaveBalanceRequest'
import type { LeaveBalanceUpdateRequest } from './types/LeaveBalanceUpdateRequest'
import type { LeaveBalanceResponse } from './types/LeaveBalanceResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LeaveBalanceController {
  listLeaveBalance(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LeaveBalanceResponse[]>>>
  createLeaveBalance(app: FastifyInstance, input: LeaveBalanceRequest, request?: FastifyRequest): Promise<LeaveBalanceResponse>
  getLeaveBalanceById(app: FastifyInstance, request?: FastifyRequest): Promise<LeaveBalanceResponse>
  updateLeaveBalance(app: FastifyInstance, input: LeaveBalanceUpdateRequest, request?: FastifyRequest): Promise<LeaveBalanceResponse>
  deleteLeaveBalance(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
