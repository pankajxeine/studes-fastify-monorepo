import type { PlacementDriveRequest } from './types/PlacementDriveRequest'
import type { PlacementDriveUpdateRequest } from './types/PlacementDriveUpdateRequest'
import type { PlacementDriveResponse } from './types/PlacementDriveResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PlacementDriveController {
  listPlacementDrive(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlacementDriveResponse[]>>>
  createPlacementDrive(app: FastifyInstance, input: PlacementDriveRequest, request?: FastifyRequest): Promise<PlacementDriveResponse>
  getPlacementDriveById(app: FastifyInstance, request?: FastifyRequest): Promise<PlacementDriveResponse>
  updatePlacementDrive(app: FastifyInstance, input: PlacementDriveUpdateRequest, request?: FastifyRequest): Promise<PlacementDriveResponse>
  deletePlacementDrive(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
