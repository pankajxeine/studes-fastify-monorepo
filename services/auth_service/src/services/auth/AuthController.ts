import type { LoginRequest } from './types/LoginRequest'
import type { LoginResponse } from './types/LoginResponse'
import type { RefreshTokenRequest } from './types/RefreshTokenRequest'
import type { RegisterRequest } from './types/RegisterRequest'
import type { AuthUser } from './types/AuthUser'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface AuthController {
  authLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse>
  authRefresh(app: FastifyInstance, input: RefreshTokenRequest, request?: FastifyRequest): Promise<LoginResponse>
  authLogout(app: FastifyInstance, request?: FastifyRequest): Promise<void>
  authRegister(app: FastifyInstance, input: RegisterRequest, request?: FastifyRequest): Promise<AuthUser>
}
