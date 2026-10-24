import type { LoginRequest } from './types/LoginRequest'
import type { LoginResponse } from './types/LoginResponse'
import type { RefreshTokenRequest } from './types/RefreshTokenRequest'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface AuthController {
  authLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse>
  authRefresh(app: FastifyInstance, input: RefreshTokenRequest, request?: FastifyRequest): Promise<LoginResponse>
  authLogout(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
