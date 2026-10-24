import type { RoomTypeRequest } from './types/RoomTypeRequest'
import type { RoomTypeUpdateRequest } from './types/RoomTypeUpdateRequest'
import type { RoomTypeResponse } from './types/RoomTypeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RoomTypeController {
  listRoomType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RoomTypeResponse[]>>>
  createRoomType(app: FastifyInstance, input: RoomTypeRequest, request?: FastifyRequest): Promise<RoomTypeResponse>
  getRoomTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<RoomTypeResponse>
  updateRoomType(app: FastifyInstance, input: RoomTypeUpdateRequest, request?: FastifyRequest): Promise<RoomTypeResponse>
  deleteRoomType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
