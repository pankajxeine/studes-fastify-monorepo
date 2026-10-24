import type { PtmSlotRequest } from './types/PtmSlotRequest'
import type { PtmSlotUpdateRequest } from './types/PtmSlotUpdateRequest'
import type { PtmSlotResponse } from './types/PtmSlotResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PtmSlotController {
  listPtmSlot(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PtmSlotResponse[]>>>
  createPtmSlot(app: FastifyInstance, input: PtmSlotRequest, request?: FastifyRequest): Promise<PtmSlotResponse>
  getPtmSlotById(app: FastifyInstance, request?: FastifyRequest): Promise<PtmSlotResponse>
  updatePtmSlot(app: FastifyInstance, input: PtmSlotUpdateRequest, request?: FastifyRequest): Promise<PtmSlotResponse>
  deletePtmSlot(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
