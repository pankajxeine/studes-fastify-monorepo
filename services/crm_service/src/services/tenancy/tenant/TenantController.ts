import type { TenantRequest } from './types/TenantRequest'
import type { TenantUpdateRequest } from './types/TenantUpdateRequest'
import type { TenantResponse } from './types/TenantResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TenantController {
  listTenant(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TenantResponse[]>>>
  createTenant(app: FastifyInstance, input: TenantRequest, request?: FastifyRequest): Promise<TenantResponse>
  getTenantById(app: FastifyInstance, request?: FastifyRequest): Promise<TenantResponse>
  updateTenant(app: FastifyInstance, input: TenantUpdateRequest, request?: FastifyRequest): Promise<TenantResponse>
  deleteTenant(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
