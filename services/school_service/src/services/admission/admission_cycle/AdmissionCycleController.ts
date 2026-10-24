import type { AdmissionCycleRequest } from './types/AdmissionCycleRequest'
import type { AdmissionCycleUpdateRequest } from './types/AdmissionCycleUpdateRequest'
import type { AdmissionCycleResponse } from './types/AdmissionCycleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AdmissionCycleController {
  listAdmissionCycle(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AdmissionCycleResponse[]>>>
  createAdmissionCycle(app: FastifyInstance, input: AdmissionCycleRequest, request?: FastifyRequest): Promise<AdmissionCycleResponse>
  getAdmissionCycleById(app: FastifyInstance, request?: FastifyRequest): Promise<AdmissionCycleResponse>
  updateAdmissionCycle(app: FastifyInstance, input: AdmissionCycleUpdateRequest, request?: FastifyRequest): Promise<AdmissionCycleResponse>
  deleteAdmissionCycle(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
