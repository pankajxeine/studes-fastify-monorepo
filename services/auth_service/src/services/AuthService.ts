import type { RegisterRequest } from '../openapi/types/RegisterRequest'
import type { LoginRequest } from '../openapi/types/LoginRequest'
import type { LoginResponse } from '../openapi/types/LoginResponse'
import type { AuthUser } from '../openapi/types/AuthUser'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { AuthController } from '../openapi/controller/AuthController'

export class AuthService implements AuthController {
  public async authRegister(input: RegisterRequest, headers?: RequestHeaders): Promise<AuthUser> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async authLogin(input: LoginRequest, headers?: RequestHeaders): Promise<LoginResponse> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async authLogout(headers?: RequestHeaders): Promise<void> {
    void headers
    throw new Error('Not implemented')
  }

  public async authRefresh(headers?: RequestHeaders): Promise<LoginResponse> {
    void headers
    throw new Error('Not implemented')
  }
}
