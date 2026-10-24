import type { PasswordResetTokenRequest } from './types/PasswordResetTokenRequest'
import type { PasswordResetTokenUpdateRequest } from './types/PasswordResetTokenUpdateRequest'
import type { PasswordResetTokenResponse } from './types/PasswordResetTokenResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PasswordResetTokenController {
  listPasswordResetToken(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PasswordResetTokenResponse[]>>>
  createPasswordResetToken(app: FastifyInstance, input: PasswordResetTokenRequest, request?: FastifyRequest): Promise<PasswordResetTokenResponse>
  getPasswordResetTokenById(app: FastifyInstance, request?: FastifyRequest): Promise<PasswordResetTokenResponse>
  updatePasswordResetToken(app: FastifyInstance, input: PasswordResetTokenUpdateRequest, request?: FastifyRequest): Promise<PasswordResetTokenResponse>
  deletePasswordResetToken(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
