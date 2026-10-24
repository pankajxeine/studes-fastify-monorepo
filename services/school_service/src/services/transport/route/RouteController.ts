import type { RouteRequest } from './types/RouteRequest'
import type { RouteUpdateRequest } from './types/RouteUpdateRequest'
import type { RouteResponse } from './types/RouteResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RouteController {
  listRoute(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RouteResponse[]>>>
  createRoute(app: FastifyInstance, input: RouteRequest, request?: FastifyRequest): Promise<RouteResponse>
  getRouteById(app: FastifyInstance, request?: FastifyRequest): Promise<RouteResponse>
  updateRoute(app: FastifyInstance, input: RouteUpdateRequest, request?: FastifyRequest): Promise<RouteResponse>
  deleteRoute(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
