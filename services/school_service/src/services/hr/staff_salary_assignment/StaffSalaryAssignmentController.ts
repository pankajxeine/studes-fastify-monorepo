import type { StaffSalaryAssignmentRequest } from './types/StaffSalaryAssignmentRequest'
import type { StaffSalaryAssignmentUpdateRequest } from './types/StaffSalaryAssignmentUpdateRequest'
import type { StaffSalaryAssignmentResponse } from './types/StaffSalaryAssignmentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StaffSalaryAssignmentController {
  listStaffSalaryAssignment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StaffSalaryAssignmentResponse[]>>>
  createStaffSalaryAssignment(app: FastifyInstance, input: StaffSalaryAssignmentRequest, request?: FastifyRequest): Promise<StaffSalaryAssignmentResponse>
  getStaffSalaryAssignmentById(app: FastifyInstance, request?: FastifyRequest): Promise<StaffSalaryAssignmentResponse>
  updateStaffSalaryAssignment(app: FastifyInstance, input: StaffSalaryAssignmentUpdateRequest, request?: FastifyRequest): Promise<StaffSalaryAssignmentResponse>
  deleteStaffSalaryAssignment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
