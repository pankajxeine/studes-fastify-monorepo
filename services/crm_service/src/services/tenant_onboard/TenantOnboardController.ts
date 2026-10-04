import type { OnboardTenantRequest } from './types/OnboardTenantRequest'
import type { OnboardTenantResponse } from './types/OnboardTenantResponse'
import type { ErrorResponse } from './types/ErrorResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface TenantOnboardController {
  onboardTenant(app: FastifyInstance, input: OnboardTenantRequest, request?: FastifyRequest): Promise<OnboardTenantResponse>
}
