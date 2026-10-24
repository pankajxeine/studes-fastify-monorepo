import type { EntitlementGrantRequest } from './types/EntitlementGrantRequest'
import type { EntitlementGrantUpdateRequest } from './types/EntitlementGrantUpdateRequest'
import type { EntitlementGrantResponse } from './types/EntitlementGrantResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface EntitlementGrantController {
  listEntitlementGrant(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EntitlementGrantResponse[]>>>
  createEntitlementGrant(app: FastifyInstance, input: EntitlementGrantRequest, request?: FastifyRequest): Promise<EntitlementGrantResponse>
  getEntitlementGrantById(app: FastifyInstance, request?: FastifyRequest): Promise<EntitlementGrantResponse>
  updateEntitlementGrant(app: FastifyInstance, input: EntitlementGrantUpdateRequest, request?: FastifyRequest): Promise<EntitlementGrantResponse>
  deleteEntitlementGrant(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
