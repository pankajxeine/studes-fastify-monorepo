import type { RegionRequest } from './types/RegionRequest'
import type { RegionUpdateRequest } from './types/RegionUpdateRequest'
import type { RegionResponse } from './types/RegionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RegionController {
  listRegion(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RegionResponse[]>>>
  createRegion(app: FastifyInstance, input: RegionRequest, request?: FastifyRequest): Promise<RegionResponse>
  getRegionById(app: FastifyInstance, request?: FastifyRequest): Promise<RegionResponse>
  updateRegion(app: FastifyInstance, input: RegionUpdateRequest, request?: FastifyRequest): Promise<RegionResponse>
  deleteRegion(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
