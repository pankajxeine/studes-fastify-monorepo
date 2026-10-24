import type { TenantApplicationRequest } from './types/TenantApplicationRequest'
import type { TenantApplicationUpdateRequest } from './types/TenantApplicationUpdateRequest'
import type { TenantApplicationResponse } from './types/TenantApplicationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TenantApplicationController {
  listTenantApplication(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TenantApplicationResponse[]>>>
  createTenantApplication(app: FastifyInstance, input: TenantApplicationRequest, request?: FastifyRequest): Promise<TenantApplicationResponse>
  getTenantApplicationById(app: FastifyInstance, request?: FastifyRequest): Promise<TenantApplicationResponse>
  updateTenantApplication(app: FastifyInstance, input: TenantApplicationUpdateRequest, request?: FastifyRequest): Promise<TenantApplicationResponse>
  deleteTenantApplication(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
