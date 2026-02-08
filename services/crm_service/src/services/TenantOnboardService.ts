import type { OnboardTenantRequest } from '../openapi/types/OnboardTenantRequest'
import type { OnboardTenantResponse } from '../openapi/types/OnboardTenantResponse'
import type { ErrorResponse } from '../openapi/types/ErrorResponse'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { TenantOnboardController } from '../openapi/controller/TenantOnboardController'

export class TenantOnboardService implements TenantOnboardController {
  public async onboardTenant(input: OnboardTenantRequest, headers?: RequestHeaders): Promise<OnboardTenantResponse> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
