import type { MfaFactorRequest } from './types/MfaFactorRequest'
import type { MfaFactorUpdateRequest } from './types/MfaFactorUpdateRequest'
import type { MfaFactorResponse } from './types/MfaFactorResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MfaFactorController {
  listMfaFactor(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MfaFactorResponse[]>>>
  createMfaFactor(app: FastifyInstance, input: MfaFactorRequest, request?: FastifyRequest): Promise<MfaFactorResponse>
  getMfaFactorById(app: FastifyInstance, request?: FastifyRequest): Promise<MfaFactorResponse>
  updateMfaFactor(app: FastifyInstance, input: MfaFactorUpdateRequest, request?: FastifyRequest): Promise<MfaFactorResponse>
  deleteMfaFactor(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
