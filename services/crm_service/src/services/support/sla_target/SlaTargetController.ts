import type { SlaTargetRequest } from './types/SlaTargetRequest'
import type { SlaTargetUpdateRequest } from './types/SlaTargetUpdateRequest'
import type { SlaTargetResponse } from './types/SlaTargetResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface SlaTargetController {
  listSlaTarget(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SlaTargetResponse[]>>>
  createSlaTarget(app: FastifyInstance, input: SlaTargetRequest, request?: FastifyRequest): Promise<SlaTargetResponse>
  getSlaTargetById(app: FastifyInstance, request?: FastifyRequest): Promise<SlaTargetResponse>
  updateSlaTarget(app: FastifyInstance, input: SlaTargetUpdateRequest, request?: FastifyRequest): Promise<SlaTargetResponse>
  deleteSlaTarget(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
