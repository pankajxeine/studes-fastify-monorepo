import type { ApplicationGuardianRequest } from './types/ApplicationGuardianRequest'
import type { ApplicationGuardianUpdateRequest } from './types/ApplicationGuardianUpdateRequest'
import type { ApplicationGuardianResponse } from './types/ApplicationGuardianResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ApplicationGuardianController {
  listApplicationGuardian(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ApplicationGuardianResponse[]>>>
  createApplicationGuardian(app: FastifyInstance, input: ApplicationGuardianRequest, request?: FastifyRequest): Promise<ApplicationGuardianResponse>
  getApplicationGuardianById(app: FastifyInstance, request?: FastifyRequest): Promise<ApplicationGuardianResponse>
  updateApplicationGuardian(app: FastifyInstance, input: ApplicationGuardianUpdateRequest, request?: FastifyRequest): Promise<ApplicationGuardianResponse>
  deleteApplicationGuardian(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
