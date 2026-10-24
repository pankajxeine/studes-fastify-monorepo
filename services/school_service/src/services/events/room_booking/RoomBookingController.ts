import type { RoomBookingRequest } from './types/RoomBookingRequest'
import type { RoomBookingUpdateRequest } from './types/RoomBookingUpdateRequest'
import type { RoomBookingResponse } from './types/RoomBookingResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RoomBookingController {
  listRoomBooking(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RoomBookingResponse[]>>>
  createRoomBooking(app: FastifyInstance, input: RoomBookingRequest, request?: FastifyRequest): Promise<RoomBookingResponse>
  getRoomBookingById(app: FastifyInstance, request?: FastifyRequest): Promise<RoomBookingResponse>
  updateRoomBooking(app: FastifyInstance, input: RoomBookingUpdateRequest, request?: FastifyRequest): Promise<RoomBookingResponse>
  deleteRoomBooking(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
