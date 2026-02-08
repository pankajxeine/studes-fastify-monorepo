import type { HealthResponse } from '../types/HealthResponse'
import type { HealthDbResponse } from '../types/HealthDbResponse'
import type { RegisterRequest } from '../types/RegisterRequest'
import type { LoginRequest } from '../types/LoginRequest'
import type { LoginResponse } from '../types/LoginResponse'
import type { AuthUser } from '../types/AuthUser'
import type { CreateTenantRequest } from '../types/CreateTenantRequest'
import type { Tenant } from '../types/Tenant'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface AuthServiceController {
  authHealth(headers?: RequestHeaders): Promise<HealthResponse>
  authHealthDb(headers?: RequestHeaders): Promise<HealthDbResponse>
  authRegister(input: RegisterRequest, headers?: RequestHeaders): Promise<AuthUser>
  authLogin(input: LoginRequest, headers?: RequestHeaders): Promise<LoginResponse>
  authLogout(headers?: RequestHeaders): Promise<void>
  createTenant(input: CreateTenantRequest, headers?: RequestHeaders): Promise<Tenant>
}
