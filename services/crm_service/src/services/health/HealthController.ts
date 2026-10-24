import type { HealthResponse } from './types/HealthResponse'
import type { HealthDbResponse } from './types/HealthDbResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../types/PaginatedResponse'

export interface HealthController {
  authHealth(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HealthResponse>>>
  authHealthDb(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HealthDbResponse>>>
}
