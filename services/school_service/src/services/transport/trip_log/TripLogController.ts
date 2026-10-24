import type { TripLogRequest } from './types/TripLogRequest'
import type { TripLogUpdateRequest } from './types/TripLogUpdateRequest'
import type { TripLogResponse } from './types/TripLogResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TripLogController {
  listTripLog(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TripLogResponse[]>>>
  createTripLog(app: FastifyInstance, input: TripLogRequest, request?: FastifyRequest): Promise<TripLogResponse>
  getTripLogById(app: FastifyInstance, request?: FastifyRequest): Promise<TripLogResponse>
  updateTripLog(app: FastifyInstance, input: TripLogUpdateRequest, request?: FastifyRequest): Promise<TripLogResponse>
  deleteTripLog(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
