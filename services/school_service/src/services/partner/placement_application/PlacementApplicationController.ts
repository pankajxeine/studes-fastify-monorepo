import type { PlacementApplicationRequest } from './types/PlacementApplicationRequest'
import type { PlacementApplicationUpdateRequest } from './types/PlacementApplicationUpdateRequest'
import type { PlacementApplicationResponse } from './types/PlacementApplicationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PlacementApplicationController {
  listPlacementApplication(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlacementApplicationResponse[]>>>
  createPlacementApplication(app: FastifyInstance, input: PlacementApplicationRequest, request?: FastifyRequest): Promise<PlacementApplicationResponse>
  getPlacementApplicationById(app: FastifyInstance, request?: FastifyRequest): Promise<PlacementApplicationResponse>
  updatePlacementApplication(app: FastifyInstance, input: PlacementApplicationUpdateRequest, request?: FastifyRequest): Promise<PlacementApplicationResponse>
  deletePlacementApplication(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
