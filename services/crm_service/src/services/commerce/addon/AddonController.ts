import type { AddonRequest } from './types/AddonRequest'
import type { AddonUpdateRequest } from './types/AddonUpdateRequest'
import type { AddonResponse } from './types/AddonResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AddonController {
  listAddon(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AddonResponse[]>>>
  createAddon(app: FastifyInstance, input: AddonRequest, request?: FastifyRequest): Promise<AddonResponse>
  getAddonById(app: FastifyInstance, request?: FastifyRequest): Promise<AddonResponse>
  updateAddon(app: FastifyInstance, input: AddonUpdateRequest, request?: FastifyRequest): Promise<AddonResponse>
  deleteAddon(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
