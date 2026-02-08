import type { HealthResponse } from '../openapi/types/HealthResponse'
import type { HealthDbResponse } from '../openapi/types/HealthDbResponse'
import type { RegisterRequest } from '../openapi/types/RegisterRequest'
import type { LoginRequest } from '../openapi/types/LoginRequest'
import type { LoginResponse } from '../openapi/types/LoginResponse'
import type { AuthUser } from '../openapi/types/AuthUser'
import type { CreateTenantRequest } from '../openapi/types/CreateTenantRequest'
import type { Tenant } from '../openapi/types/Tenant'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { AuthServiceController } from '../openapi/controller/AuthServiceController'

export class AuthServiceService implements AuthServiceController {
  public async authHealth(headers?: RequestHeaders): Promise<HealthResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async authHealthDb(headers?: RequestHeaders): Promise<HealthDbResponse> {
    void headers
    throw new Error('Not implemented')
  }

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

  public async createTenant(input: CreateTenantRequest, headers?: RequestHeaders): Promise<Tenant> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
