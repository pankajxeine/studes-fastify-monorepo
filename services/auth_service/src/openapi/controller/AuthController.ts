import type { RegisterRequest } from '../types/RegisterRequest'
import type { LoginRequest } from '../types/LoginRequest'
import type { LoginResponse } from '../types/LoginResponse'
import type { AuthUser } from '../types/AuthUser'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface AuthController {
  authRegister(app: FastifyInstance, input: RegisterRequest, request?: FastifyRequest): Promise<AuthUser>
  authLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse>
  authLogout(app: FastifyInstance, request?: FastifyRequest): Promise<void>
  authRefresh(app: FastifyInstance, request?: FastifyRequest): Promise<LoginResponse>
}
