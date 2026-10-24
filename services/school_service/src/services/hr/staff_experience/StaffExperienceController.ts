import type { StaffExperienceRequest } from './types/StaffExperienceRequest'
import type { StaffExperienceUpdateRequest } from './types/StaffExperienceUpdateRequest'
import type { StaffExperienceResponse } from './types/StaffExperienceResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StaffExperienceController {
  listStaffExperience(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StaffExperienceResponse[]>>>
  createStaffExperience(app: FastifyInstance, input: StaffExperienceRequest, request?: FastifyRequest): Promise<StaffExperienceResponse>
  getStaffExperienceById(app: FastifyInstance, request?: FastifyRequest): Promise<StaffExperienceResponse>
  updateStaffExperience(app: FastifyInstance, input: StaffExperienceUpdateRequest, request?: FastifyRequest): Promise<StaffExperienceResponse>
  deleteStaffExperience(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
