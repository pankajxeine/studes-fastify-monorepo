import type { MessMenuRequest } from './types/MessMenuRequest'
import type { MessMenuUpdateRequest } from './types/MessMenuUpdateRequest'
import type { MessMenuResponse } from './types/MessMenuResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface MessMenuController {
  listMessMenu(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<MessMenuResponse[]>>>
  createMessMenu(app: FastifyInstance, input: MessMenuRequest, request?: FastifyRequest): Promise<MessMenuResponse>
  getMessMenuById(app: FastifyInstance, request?: FastifyRequest): Promise<MessMenuResponse>
  updateMessMenu(app: FastifyInstance, input: MessMenuUpdateRequest, request?: FastifyRequest): Promise<MessMenuResponse>
  deleteMessMenu(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
