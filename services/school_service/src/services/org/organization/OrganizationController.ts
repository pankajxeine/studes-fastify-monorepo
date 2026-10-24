import type { OrganizationRequest } from './types/OrganizationRequest'
import type { OrganizationUpdateRequest } from './types/OrganizationUpdateRequest'
import type { OrganizationResponse } from './types/OrganizationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface OrganizationController {
  listOrganization(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<OrganizationResponse[]>>>
  createOrganization(app: FastifyInstance, input: OrganizationRequest, request?: FastifyRequest): Promise<OrganizationResponse>
  getOrganizationById(app: FastifyInstance, request?: FastifyRequest): Promise<OrganizationResponse>
  updateOrganization(app: FastifyInstance, input: OrganizationUpdateRequest, request?: FastifyRequest): Promise<OrganizationResponse>
  deleteOrganization(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
