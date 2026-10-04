import type { HealthResponse } from './types/HealthResponse'
import type { HealthDbResponse } from './types/HealthDbResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface HealthController {
  authHealth(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HealthResponse>>>
  authHealthDb(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HealthDbResponse>>>
}
