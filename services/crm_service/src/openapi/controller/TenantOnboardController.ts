import type { OnboardTenantRequest } from '../types/OnboardTenantRequest'
import type { OnboardTenantResponse } from '../types/OnboardTenantResponse'
import type { ErrorResponse } from '../types/ErrorResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface TenantOnboardController {
  onboardTenant(app: FastifyInstance, input: OnboardTenantRequest, request?: FastifyRequest): Promise<OnboardTenantResponse>
}
