import type { PartnerContactRequest } from './types/PartnerContactRequest'
import type { PartnerContactUpdateRequest } from './types/PartnerContactUpdateRequest'
import type { PartnerContactResponse } from './types/PartnerContactResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PartnerContactController {
  listPartnerContact(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PartnerContactResponse[]>>>
  createPartnerContact(app: FastifyInstance, input: PartnerContactRequest, request?: FastifyRequest): Promise<PartnerContactResponse>
  getPartnerContactById(app: FastifyInstance, request?: FastifyRequest): Promise<PartnerContactResponse>
  updatePartnerContact(app: FastifyInstance, input: PartnerContactUpdateRequest, request?: FastifyRequest): Promise<PartnerContactResponse>
  deletePartnerContact(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
