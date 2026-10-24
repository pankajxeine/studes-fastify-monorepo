import type { ReservationRequest } from './types/ReservationRequest'
import type { ReservationUpdateRequest } from './types/ReservationUpdateRequest'
import type { ReservationResponse } from './types/ReservationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface ReservationController {
  listReservation(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ReservationResponse[]>>>
  createReservation(app: FastifyInstance, input: ReservationRequest, request?: FastifyRequest): Promise<ReservationResponse>
  getReservationById(app: FastifyInstance, request?: FastifyRequest): Promise<ReservationResponse>
  updateReservation(app: FastifyInstance, input: ReservationUpdateRequest, request?: FastifyRequest): Promise<ReservationResponse>
  deleteReservation(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
