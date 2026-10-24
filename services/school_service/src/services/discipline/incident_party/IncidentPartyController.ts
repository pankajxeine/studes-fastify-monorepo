import type { IncidentPartyRequest } from './types/IncidentPartyRequest'
import type { IncidentPartyUpdateRequest } from './types/IncidentPartyUpdateRequest'
import type { IncidentPartyResponse } from './types/IncidentPartyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface IncidentPartyController {
  listIncidentParty(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IncidentPartyResponse[]>>>
  createIncidentParty(app: FastifyInstance, input: IncidentPartyRequest, request?: FastifyRequest): Promise<IncidentPartyResponse>
  getIncidentPartyById(app: FastifyInstance, request?: FastifyRequest): Promise<IncidentPartyResponse>
  updateIncidentParty(app: FastifyInstance, input: IncidentPartyUpdateRequest, request?: FastifyRequest): Promise<IncidentPartyResponse>
  deleteIncidentParty(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
