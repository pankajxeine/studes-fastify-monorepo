import type { ClinicVisitRequest } from './types/ClinicVisitRequest'
import type { ClinicVisitUpdateRequest } from './types/ClinicVisitUpdateRequest'
import type { ClinicVisitResponse } from './types/ClinicVisitResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ClinicVisitController {
  listClinicVisit(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ClinicVisitResponse[]>>>
  createClinicVisit(app: FastifyInstance, input: ClinicVisitRequest, request?: FastifyRequest): Promise<ClinicVisitResponse>
  getClinicVisitById(app: FastifyInstance, request?: FastifyRequest): Promise<ClinicVisitResponse>
  updateClinicVisit(app: FastifyInstance, input: ClinicVisitUpdateRequest, request?: FastifyRequest): Promise<ClinicVisitResponse>
  deleteClinicVisit(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
