import type { AcceptanceModeRequest } from './types/AcceptanceModeRequest'
import type { AcceptanceModeUpdateRequest } from './types/AcceptanceModeUpdateRequest'
import type { AcceptanceModeResponse } from './types/AcceptanceModeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AcceptanceModeController {
  listAcceptanceMode(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AcceptanceModeResponse[]>>>
  createAcceptanceMode(app: FastifyInstance, input: AcceptanceModeRequest, request?: FastifyRequest): Promise<AcceptanceModeResponse>
  getAcceptanceModeById(app: FastifyInstance, request?: FastifyRequest): Promise<AcceptanceModeResponse>
  updateAcceptanceMode(app: FastifyInstance, input: AcceptanceModeUpdateRequest, request?: FastifyRequest): Promise<AcceptanceModeResponse>
  deleteAcceptanceMode(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
