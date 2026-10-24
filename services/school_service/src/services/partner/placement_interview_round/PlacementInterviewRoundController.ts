import type { PlacementInterviewRoundRequest } from './types/PlacementInterviewRoundRequest'
import type { PlacementInterviewRoundUpdateRequest } from './types/PlacementInterviewRoundUpdateRequest'
import type { PlacementInterviewRoundResponse } from './types/PlacementInterviewRoundResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PlacementInterviewRoundController {
  listPlacementInterviewRound(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlacementInterviewRoundResponse[]>>>
  createPlacementInterviewRound(app: FastifyInstance, input: PlacementInterviewRoundRequest, request?: FastifyRequest): Promise<PlacementInterviewRoundResponse>
  getPlacementInterviewRoundById(app: FastifyInstance, request?: FastifyRequest): Promise<PlacementInterviewRoundResponse>
  updatePlacementInterviewRound(app: FastifyInstance, input: PlacementInterviewRoundUpdateRequest, request?: FastifyRequest): Promise<PlacementInterviewRoundResponse>
  deletePlacementInterviewRound(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
