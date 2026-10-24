import type { PlacementRoundResultRequest } from './types/PlacementRoundResultRequest'
import type { PlacementRoundResultUpdateRequest } from './types/PlacementRoundResultUpdateRequest'
import type { PlacementRoundResultResponse } from './types/PlacementRoundResultResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PlacementRoundResultController {
  listPlacementRoundResult(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlacementRoundResultResponse[]>>>
  createPlacementRoundResult(app: FastifyInstance, input: PlacementRoundResultRequest, request?: FastifyRequest): Promise<PlacementRoundResultResponse>
  getPlacementRoundResultById(app: FastifyInstance, request?: FastifyRequest): Promise<PlacementRoundResultResponse>
  updatePlacementRoundResult(app: FastifyInstance, input: PlacementRoundResultUpdateRequest, request?: FastifyRequest): Promise<PlacementRoundResultResponse>
  deletePlacementRoundResult(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
