import type { HostelRoomRequest } from './types/HostelRoomRequest'
import type { HostelRoomUpdateRequest } from './types/HostelRoomUpdateRequest'
import type { HostelRoomResponse } from './types/HostelRoomResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface HostelRoomController {
  listHostelRoom(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HostelRoomResponse[]>>>
  createHostelRoom(app: FastifyInstance, input: HostelRoomRequest, request?: FastifyRequest): Promise<HostelRoomResponse>
  getHostelRoomById(app: FastifyInstance, request?: FastifyRequest): Promise<HostelRoomResponse>
  updateHostelRoom(app: FastifyInstance, input: HostelRoomUpdateRequest, request?: FastifyRequest): Promise<HostelRoomResponse>
  deleteHostelRoom(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
