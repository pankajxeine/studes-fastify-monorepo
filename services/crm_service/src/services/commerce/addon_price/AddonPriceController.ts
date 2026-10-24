import type { AddonPriceRequest } from './types/AddonPriceRequest'
import type { AddonPriceUpdateRequest } from './types/AddonPriceUpdateRequest'
import type { AddonPriceResponse } from './types/AddonPriceResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface AddonPriceController {
  listAddonPrice(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AddonPriceResponse[]>>>
  createAddonPrice(app: FastifyInstance, input: AddonPriceRequest, request?: FastifyRequest): Promise<AddonPriceResponse>
  getAddonPriceById(app: FastifyInstance, request?: FastifyRequest): Promise<AddonPriceResponse>
  updateAddonPrice(app: FastifyInstance, input: AddonPriceUpdateRequest, request?: FastifyRequest): Promise<AddonPriceResponse>
  deleteAddonPrice(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
