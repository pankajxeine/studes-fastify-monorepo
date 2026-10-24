import type { CanteenStaffAssignmentRequest } from './types/CanteenStaffAssignmentRequest'
import type { CanteenStaffAssignmentUpdateRequest } from './types/CanteenStaffAssignmentUpdateRequest'
import type { CanteenStaffAssignmentResponse } from './types/CanteenStaffAssignmentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CanteenStaffAssignmentController {
  listCanteenStaffAssignment(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CanteenStaffAssignmentResponse[]>>>
  createCanteenStaffAssignment(app: FastifyInstance, input: CanteenStaffAssignmentRequest, request?: FastifyRequest): Promise<CanteenStaffAssignmentResponse>
  getCanteenStaffAssignmentById(app: FastifyInstance, request?: FastifyRequest): Promise<CanteenStaffAssignmentResponse>
  updateCanteenStaffAssignment(app: FastifyInstance, input: CanteenStaffAssignmentUpdateRequest, request?: FastifyRequest): Promise<CanteenStaffAssignmentResponse>
  deleteCanteenStaffAssignment(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
