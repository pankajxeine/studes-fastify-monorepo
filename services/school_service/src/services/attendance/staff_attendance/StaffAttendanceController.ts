import type { StaffAttendanceRequest } from './types/StaffAttendanceRequest'
import type { StaffAttendanceUpdateRequest } from './types/StaffAttendanceUpdateRequest'
import type { StaffAttendanceResponse } from './types/StaffAttendanceResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StaffAttendanceController {
  listStaffAttendance(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StaffAttendanceResponse[]>>>
  createStaffAttendance(app: FastifyInstance, input: StaffAttendanceRequest, request?: FastifyRequest): Promise<StaffAttendanceResponse>
  getStaffAttendanceById(app: FastifyInstance, request?: FastifyRequest): Promise<StaffAttendanceResponse>
  updateStaffAttendance(app: FastifyInstance, input: StaffAttendanceUpdateRequest, request?: FastifyRequest): Promise<StaffAttendanceResponse>
  deleteStaffAttendance(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
