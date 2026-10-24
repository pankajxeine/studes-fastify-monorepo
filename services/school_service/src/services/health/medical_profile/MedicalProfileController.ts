import type { MedicalProfileRequest } from './types/MedicalProfileRequest'
import type { MedicalProfileUpdateRequest } from './types/MedicalProfileUpdateRequest'
import type { MedicalProfileResponse } from './types/MedicalProfileResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MedicalProfileController {
  listMedicalProfile(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MedicalProfileResponse[]>>>
  createMedicalProfile(app: FastifyInstance, input: MedicalProfileRequest, request?: FastifyRequest): Promise<MedicalProfileResponse>
  getMedicalProfileById(app: FastifyInstance, request?: FastifyRequest): Promise<MedicalProfileResponse>
  updateMedicalProfile(app: FastifyInstance, input: MedicalProfileUpdateRequest, request?: FastifyRequest): Promise<MedicalProfileResponse>
  deleteMedicalProfile(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
