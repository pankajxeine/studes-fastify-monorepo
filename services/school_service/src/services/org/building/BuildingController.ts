import type { BuildingRequest } from './types/BuildingRequest'
import type { BuildingUpdateRequest } from './types/BuildingUpdateRequest'
import type { BuildingResponse } from './types/BuildingResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface BuildingController {
  listBuilding(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BuildingResponse[]>>>
  createBuilding(app: FastifyInstance, input: BuildingRequest, request?: FastifyRequest): Promise<BuildingResponse>
  getBuildingById(app: FastifyInstance, request?: FastifyRequest): Promise<BuildingResponse>
  updateBuilding(app: FastifyInstance, input: BuildingUpdateRequest, request?: FastifyRequest): Promise<BuildingResponse>
  deleteBuilding(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
