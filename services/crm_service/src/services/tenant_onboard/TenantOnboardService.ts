import type { OnboardTenantRequest } from './types/OnboardTenantRequest'
import type { OnboardTenantResponse } from './types/OnboardTenantResponse'
import type { ErrorResponse } from './types/ErrorResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { TenantOnboardController, ListItem, PaginatedResponse } from './TenantOnboardController'

export class TenantOnboardService implements TenantOnboardController {
      public async onboardTenant(app: FastifyInstance, input: OnboardTenantRequest, request?: FastifyRequest): Promise<OnboardTenantResponse> {
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
