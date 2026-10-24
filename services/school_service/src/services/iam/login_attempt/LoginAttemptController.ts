import type { LoginAttemptRequest } from './types/LoginAttemptRequest'
import type { LoginAttemptUpdateRequest } from './types/LoginAttemptUpdateRequest'
import type { LoginAttemptResponse } from './types/LoginAttemptResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface LoginAttemptController {
  listLoginAttempt(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LoginAttemptResponse[]>>>
  createLoginAttempt(app: FastifyInstance, input: LoginAttemptRequest, request?: FastifyRequest): Promise<LoginAttemptResponse>
  getLoginAttemptById(app: FastifyInstance, request?: FastifyRequest): Promise<LoginAttemptResponse>
  updateLoginAttempt(app: FastifyInstance, input: LoginAttemptUpdateRequest, request?: FastifyRequest): Promise<LoginAttemptResponse>
  deleteLoginAttempt(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
