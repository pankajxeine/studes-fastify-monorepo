import type { PlacementDriveEligibilityRequest } from './types/PlacementDriveEligibilityRequest'
import type { PlacementDriveEligibilityUpdateRequest } from './types/PlacementDriveEligibilityUpdateRequest'
import type { PlacementDriveEligibilityResponse } from './types/PlacementDriveEligibilityResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PlacementDriveEligibilityController {
  listPlacementDriveEligibility(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlacementDriveEligibilityResponse[]>>>
  createPlacementDriveEligibility(app: FastifyInstance, input: PlacementDriveEligibilityRequest, request?: FastifyRequest): Promise<PlacementDriveEligibilityResponse>
  getPlacementDriveEligibilityById(app: FastifyInstance, request?: FastifyRequest): Promise<PlacementDriveEligibilityResponse>
  updatePlacementDriveEligibility(app: FastifyInstance, input: PlacementDriveEligibilityUpdateRequest, request?: FastifyRequest): Promise<PlacementDriveEligibilityResponse>
  deletePlacementDriveEligibility(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
