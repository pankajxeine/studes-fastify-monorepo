import type { TenantDomainRequest } from './types/TenantDomainRequest'
import type { TenantDomainUpdateRequest } from './types/TenantDomainUpdateRequest'
import type { TenantDomainResponse } from './types/TenantDomainResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TenantDomainController {
  listTenantDomain(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TenantDomainResponse[]>>>
  createTenantDomain(app: FastifyInstance, input: TenantDomainRequest, request?: FastifyRequest): Promise<TenantDomainResponse>
  getTenantDomainById(app: FastifyInstance, request?: FastifyRequest): Promise<TenantDomainResponse>
  updateTenantDomain(app: FastifyInstance, input: TenantDomainUpdateRequest, request?: FastifyRequest): Promise<TenantDomainResponse>
  deleteTenantDomain(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
