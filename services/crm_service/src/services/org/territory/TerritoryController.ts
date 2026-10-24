import type { TerritoryRequest } from './types/TerritoryRequest'
import type { TerritoryUpdateRequest } from './types/TerritoryUpdateRequest'
import type { TerritoryResponse } from './types/TerritoryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TerritoryController {
  listTerritory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TerritoryResponse[]>>>
  createTerritory(app: FastifyInstance, input: TerritoryRequest, request?: FastifyRequest): Promise<TerritoryResponse>
  getTerritoryById(app: FastifyInstance, request?: FastifyRequest): Promise<TerritoryResponse>
  updateTerritory(app: FastifyInstance, input: TerritoryUpdateRequest, request?: FastifyRequest): Promise<TerritoryResponse>
  deleteTerritory(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
