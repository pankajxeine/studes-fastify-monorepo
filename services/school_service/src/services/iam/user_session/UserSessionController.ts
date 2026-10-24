import type { UserSessionRequest } from './types/UserSessionRequest'
import type { UserSessionUpdateRequest } from './types/UserSessionUpdateRequest'
import type { UserSessionResponse } from './types/UserSessionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface UserSessionController {
  listUserSession(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserSessionResponse[]>>>
  createUserSession(app: FastifyInstance, input: UserSessionRequest, request?: FastifyRequest): Promise<UserSessionResponse>
  getUserSessionById(app: FastifyInstance, request?: FastifyRequest): Promise<UserSessionResponse>
  updateUserSession(app: FastifyInstance, input: UserSessionUpdateRequest, request?: FastifyRequest): Promise<UserSessionResponse>
  deleteUserSession(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
