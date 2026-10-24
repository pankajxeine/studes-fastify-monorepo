import type { GuardianRequest } from './types/GuardianRequest'
import type { GuardianUpdateRequest } from './types/GuardianUpdateRequest'
import type { GuardianResponse } from './types/GuardianResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface GuardianController {
  listGuardian(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GuardianResponse[]>>>
  createGuardian(app: FastifyInstance, input: GuardianRequest, request?: FastifyRequest): Promise<GuardianResponse>
  getGuardianById(app: FastifyInstance, request?: FastifyRequest): Promise<GuardianResponse>
  updateGuardian(app: FastifyInstance, input: GuardianUpdateRequest, request?: FastifyRequest): Promise<GuardianResponse>
  deleteGuardian(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
