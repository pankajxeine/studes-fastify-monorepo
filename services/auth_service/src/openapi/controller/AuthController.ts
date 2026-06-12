import type { RegisterRequest } from '../types/RegisterRequest'
import type { LoginRequest } from '../types/LoginRequest'
import type { LoginResponse } from '../types/LoginResponse'
import type { AuthUser } from '../types/AuthUser'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface AuthController {
  authRegister(input: RegisterRequest, headers?: RequestHeaders): Promise<AuthUser>
  authLogin(input: LoginRequest, headers?: RequestHeaders): Promise<LoginResponse>
  authLogout(headers?: RequestHeaders): Promise<void>
  authRefresh(headers?: RequestHeaders): Promise<LoginResponse>
}
