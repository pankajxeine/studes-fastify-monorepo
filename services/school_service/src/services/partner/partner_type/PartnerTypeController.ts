import type { PartnerTypeRequest } from './types/PartnerTypeRequest'
import type { PartnerTypeUpdateRequest } from './types/PartnerTypeUpdateRequest'
import type { PartnerTypeResponse } from './types/PartnerTypeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PartnerTypeController {
  listPartnerType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PartnerTypeResponse[]>>>
  createPartnerType(app: FastifyInstance, input: PartnerTypeRequest, request?: FastifyRequest): Promise<PartnerTypeResponse>
  getPartnerTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<PartnerTypeResponse>
  updatePartnerType(app: FastifyInstance, input: PartnerTypeUpdateRequest, request?: FastifyRequest): Promise<PartnerTypeResponse>
  deletePartnerType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
