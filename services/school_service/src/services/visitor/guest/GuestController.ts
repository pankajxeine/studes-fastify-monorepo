import type { GuestRequest } from './types/GuestRequest'
import type { GuestUpdateRequest } from './types/GuestUpdateRequest'
import type { GuestResponse } from './types/GuestResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface GuestController {
  listGuest(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GuestResponse[]>>>
  createGuest(app: FastifyInstance, input: GuestRequest, request?: FastifyRequest): Promise<GuestResponse>
  getGuestById(app: FastifyInstance, request?: FastifyRequest): Promise<GuestResponse>
  updateGuest(app: FastifyInstance, input: GuestUpdateRequest, request?: FastifyRequest): Promise<GuestResponse>
  deleteGuest(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
