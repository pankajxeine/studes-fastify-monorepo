import type { AddonItemRequest } from './types/AddonItemRequest'
import type { AddonItemUpdateRequest } from './types/AddonItemUpdateRequest'
import type { AddonItemResponse } from './types/AddonItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AddonItemController {
  listAddonItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AddonItemResponse[]>>>
  createAddonItem(app: FastifyInstance, input: AddonItemRequest, request?: FastifyRequest): Promise<AddonItemResponse>
  getAddonItemById(app: FastifyInstance, request?: FastifyRequest): Promise<AddonItemResponse>
  updateAddonItem(app: FastifyInstance, input: AddonItemUpdateRequest, request?: FastifyRequest): Promise<AddonItemResponse>
  deleteAddonItem(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
