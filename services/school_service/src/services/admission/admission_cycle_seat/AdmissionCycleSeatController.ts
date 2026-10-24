import type { AdmissionCycleSeatRequest } from './types/AdmissionCycleSeatRequest'
import type { AdmissionCycleSeatUpdateRequest } from './types/AdmissionCycleSeatUpdateRequest'
import type { AdmissionCycleSeatResponse } from './types/AdmissionCycleSeatResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AdmissionCycleSeatController {
  listAdmissionCycleSeat(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AdmissionCycleSeatResponse[]>>>
  createAdmissionCycleSeat(app: FastifyInstance, input: AdmissionCycleSeatRequest, request?: FastifyRequest): Promise<AdmissionCycleSeatResponse>
  getAdmissionCycleSeatById(app: FastifyInstance, request?: FastifyRequest): Promise<AdmissionCycleSeatResponse>
  updateAdmissionCycleSeat(app: FastifyInstance, input: AdmissionCycleSeatUpdateRequest, request?: FastifyRequest): Promise<AdmissionCycleSeatResponse>
  deleteAdmissionCycleSeat(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
