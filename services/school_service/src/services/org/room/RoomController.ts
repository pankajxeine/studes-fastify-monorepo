import type { RoomRequest } from './types/RoomRequest'
import type { RoomUpdateRequest } from './types/RoomUpdateRequest'
import type { RoomResponse } from './types/RoomResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RoomController {
  listRoom(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RoomResponse[]>>>
  createRoom(app: FastifyInstance, input: RoomRequest, request?: FastifyRequest): Promise<RoomResponse>
  getRoomById(app: FastifyInstance, request?: FastifyRequest): Promise<RoomResponse>
  updateRoom(app: FastifyInstance, input: RoomUpdateRequest, request?: FastifyRequest): Promise<RoomResponse>
  deleteRoom(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
