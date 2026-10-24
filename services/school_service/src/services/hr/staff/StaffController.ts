import type { StaffRequest } from './types/StaffRequest'
import type { StaffUpdateRequest } from './types/StaffUpdateRequest'
import type { StaffResponse } from './types/StaffResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StaffController {
  listStaff(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StaffResponse[]>>>
  createStaff(app: FastifyInstance, input: StaffRequest, request?: FastifyRequest): Promise<StaffResponse>
  getStaffById(app: FastifyInstance, request?: FastifyRequest): Promise<StaffResponse>
  updateStaff(app: FastifyInstance, input: StaffUpdateRequest, request?: FastifyRequest): Promise<StaffResponse>
  deleteStaff(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
