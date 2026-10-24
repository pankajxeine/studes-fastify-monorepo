import type { VisitRequest } from './types/VisitRequest'
import type { VisitUpdateRequest } from './types/VisitUpdateRequest'
import type { VisitResponse } from './types/VisitResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface VisitController {
  listVisit(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<VisitResponse[]>>>
  createVisit(app: FastifyInstance, input: VisitRequest, request?: FastifyRequest): Promise<VisitResponse>
  getVisitById(app: FastifyInstance, request?: FastifyRequest): Promise<VisitResponse>
  updateVisit(app: FastifyInstance, input: VisitUpdateRequest, request?: FastifyRequest): Promise<VisitResponse>
  deleteVisit(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
