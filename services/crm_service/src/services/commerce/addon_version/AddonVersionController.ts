import type { AddonVersionRequest } from './types/AddonVersionRequest'
import type { AddonVersionUpdateRequest } from './types/AddonVersionUpdateRequest'
import type { AddonVersionResponse } from './types/AddonVersionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AddonVersionController {
  listAddonVersion(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AddonVersionResponse[]>>>
  createAddonVersion(app: FastifyInstance, input: AddonVersionRequest, request?: FastifyRequest): Promise<AddonVersionResponse>
  getAddonVersionById(app: FastifyInstance, request?: FastifyRequest): Promise<AddonVersionResponse>
  updateAddonVersion(app: FastifyInstance, input: AddonVersionUpdateRequest, request?: FastifyRequest): Promise<AddonVersionResponse>
  deleteAddonVersion(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
