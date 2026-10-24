import type { DeprovisionRequestRequest } from './types/DeprovisionRequestRequest'
import type { DeprovisionRequestUpdateRequest } from './types/DeprovisionRequestUpdateRequest'
import type { DeprovisionRequestResponse } from './types/DeprovisionRequestResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DeprovisionRequestController {
  listDeprovisionRequest(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DeprovisionRequestResponse[]>>>
  createDeprovisionRequest(app: FastifyInstance, input: DeprovisionRequestRequest, request?: FastifyRequest): Promise<DeprovisionRequestResponse>
  getDeprovisionRequestById(app: FastifyInstance, request?: FastifyRequest): Promise<DeprovisionRequestResponse>
  updateDeprovisionRequest(app: FastifyInstance, input: DeprovisionRequestUpdateRequest, request?: FastifyRequest): Promise<DeprovisionRequestResponse>
  deleteDeprovisionRequest(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
