import type { LeaveRequestCreateRequest } from './types/LeaveRequestCreateRequest'
import type { LeaveRequest } from './types/LeaveRequest'
import type { LeaveRequestList } from './types/LeaveRequestList'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface LeaveController {
  listLeaveRequests(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LeaveRequestList>>>
  createLeaveRequest(app: FastifyInstance, input: LeaveRequestCreateRequest, request?: FastifyRequest): Promise<LeaveRequest>
}
