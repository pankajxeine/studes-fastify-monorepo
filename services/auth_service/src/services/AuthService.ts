import type { RegisterRequest } from '../openapi/types/RegisterRequest'
import type { LoginRequest } from '../openapi/types/LoginRequest'
import type { LoginResponse } from '../openapi/types/LoginResponse'
import type { AuthUser } from '../openapi/types/AuthUser'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AuthController } from '../openapi/controller/AuthController'

export class AuthService implements AuthController {
  public async authRegister(app: FastifyInstance, input: RegisterRequest, request?: FastifyRequest): Promise<AuthUser> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async authLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async authLogout(app: FastifyInstance,request?: FastifyRequest): Promise<void> {
    void request
    throw new Error('Not implemented')
  }

  public async authRefresh(app: FastifyInstance,request?: FastifyRequest): Promise<LoginResponse> {
    void request
    throw new Error('Not implemented')
  }
}
