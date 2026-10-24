import type { TenantConfigRequest } from './types/TenantConfigRequest'
import type { TenantConfigUpdateRequest } from './types/TenantConfigUpdateRequest'
import type { TenantConfigResponse } from './types/TenantConfigResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TenantConfigController {
  listTenantConfig(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TenantConfigResponse[]>>>
  createTenantConfig(app: FastifyInstance, input: TenantConfigRequest, request?: FastifyRequest): Promise<TenantConfigResponse>
  getTenantConfigById(app: FastifyInstance, request?: FastifyRequest): Promise<TenantConfigResponse>
  updateTenantConfig(app: FastifyInstance, input: TenantConfigUpdateRequest, request?: FastifyRequest): Promise<TenantConfigResponse>
  deleteTenantConfig(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
