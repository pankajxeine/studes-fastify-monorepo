import type { StaffQualificationRequest } from './types/StaffQualificationRequest'
import type { StaffQualificationUpdateRequest } from './types/StaffQualificationUpdateRequest'
import type { StaffQualificationResponse } from './types/StaffQualificationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StaffQualificationController {
  listStaffQualification(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StaffQualificationResponse[]>>>
  createStaffQualification(app: FastifyInstance, input: StaffQualificationRequest, request?: FastifyRequest): Promise<StaffQualificationResponse>
  getStaffQualificationById(app: FastifyInstance, request?: FastifyRequest): Promise<StaffQualificationResponse>
  updateStaffQualification(app: FastifyInstance, input: StaffQualificationUpdateRequest, request?: FastifyRequest): Promise<StaffQualificationResponse>
  deleteStaffQualification(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
