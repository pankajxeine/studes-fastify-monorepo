import type { RouteStopRequest } from './types/RouteStopRequest'
import type { RouteStopUpdateRequest } from './types/RouteStopUpdateRequest'
import type { RouteStopResponse } from './types/RouteStopResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RouteStopController {
  listRouteStop(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RouteStopResponse[]>>>
  createRouteStop(app: FastifyInstance, input: RouteStopRequest, request?: FastifyRequest): Promise<RouteStopResponse>
  getRouteStopById(app: FastifyInstance, request?: FastifyRequest): Promise<RouteStopResponse>
  updateRouteStop(app: FastifyInstance, input: RouteStopUpdateRequest, request?: FastifyRequest): Promise<RouteStopResponse>
  deleteRouteStop(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
