import type { EntitlementOverrideRequest } from './types/EntitlementOverrideRequest'
import type { EntitlementOverrideUpdateRequest } from './types/EntitlementOverrideUpdateRequest'
import type { EntitlementOverrideResponse } from './types/EntitlementOverrideResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface EntitlementOverrideController {
  listEntitlementOverride(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<EntitlementOverrideResponse[]>>>
  createEntitlementOverride(app: FastifyInstance, input: EntitlementOverrideRequest, request?: FastifyRequest): Promise<EntitlementOverrideResponse>
  getEntitlementOverrideById(app: FastifyInstance, request?: FastifyRequest): Promise<EntitlementOverrideResponse>
  updateEntitlementOverride(app: FastifyInstance, input: EntitlementOverrideUpdateRequest, request?: FastifyRequest): Promise<EntitlementOverrideResponse>
  deleteEntitlementOverride(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
