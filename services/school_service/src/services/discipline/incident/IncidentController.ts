import type { IncidentRequest } from './types/IncidentRequest'
import type { IncidentUpdateRequest } from './types/IncidentUpdateRequest'
import type { IncidentResponse } from './types/IncidentResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface IncidentController {
  listIncident(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IncidentResponse[]>>>
  createIncident(app: FastifyInstance, input: IncidentRequest, request?: FastifyRequest): Promise<IncidentResponse>
  getIncidentById(app: FastifyInstance, request?: FastifyRequest): Promise<IncidentResponse>
  updateIncident(app: FastifyInstance, input: IncidentUpdateRequest, request?: FastifyRequest): Promise<IncidentResponse>
  deleteIncident(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
