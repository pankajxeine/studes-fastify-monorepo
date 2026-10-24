import type { PartnerOrganizationRequest } from './types/PartnerOrganizationRequest'
import type { PartnerOrganizationUpdateRequest } from './types/PartnerOrganizationUpdateRequest'
import type { PartnerOrganizationResponse } from './types/PartnerOrganizationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PartnerOrganizationController {
  listPartnerOrganization(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PartnerOrganizationResponse[]>>>
  createPartnerOrganization(app: FastifyInstance, input: PartnerOrganizationRequest, request?: FastifyRequest): Promise<PartnerOrganizationResponse>
  getPartnerOrganizationById(app: FastifyInstance, request?: FastifyRequest): Promise<PartnerOrganizationResponse>
  updatePartnerOrganization(app: FastifyInstance, input: PartnerOrganizationUpdateRequest, request?: FastifyRequest): Promise<PartnerOrganizationResponse>
  deletePartnerOrganization(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
