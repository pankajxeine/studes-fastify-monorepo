import type { LoginRequest } from './types/LoginRequest'
import type { LoginResponse } from './types/LoginResponse'
import type { RefreshTokenRequest } from './types/RefreshTokenRequest'
import type { RegisterRequest } from './types/RegisterRequest'
import type { AuthUser } from './types/AuthUser'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AuthController } from './AuthController'

export class AuthService implements AuthController {
  public async authLogin(app: FastifyInstance, input: LoginRequest, request?: FastifyRequest): Promise<LoginResponse> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async authRefresh(app: FastifyInstance, input: RefreshTokenRequest, request?: FastifyRequest): Promise<LoginResponse> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async authLogout(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // TODO: implement logic using app + request
      
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async authRegister(app: FastifyInstance, input: RegisterRequest, request?: FastifyRequest): Promise<AuthUser> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
