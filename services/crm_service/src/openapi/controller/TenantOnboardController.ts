import type { OnboardTenantRequest } from '../types/OnboardTenantRequest'
import type { OnboardTenantResponse } from '../types/OnboardTenantResponse'
import type { ErrorResponse } from '../types/ErrorResponse'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface TenantOnboardController {
  onboardTenant(input: OnboardTenantRequest, headers?: RequestHeaders): Promise<OnboardTenantResponse>
}
