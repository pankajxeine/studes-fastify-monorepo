import type { OnboardTenantRequest } from '../openapi/types/OnboardTenantRequest'
import type { OnboardTenantResponse } from '../openapi/types/OnboardTenantResponse'
import type { ErrorResponse } from '../openapi/types/ErrorResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { TenantOnboardController } from '../openapi/controller/TenantOnboardController'

export class TenantOnboardService implements TenantOnboardController {
  public async onboardTenant(app: FastifyInstance, input: OnboardTenantRequest, request?: FastifyRequest): Promise<OnboardTenantResponse> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
