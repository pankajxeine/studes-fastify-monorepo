import type { TenantRoleTemplateRequest } from './types/TenantRoleTemplateRequest'
import type { TenantRoleTemplateUpdateRequest } from './types/TenantRoleTemplateUpdateRequest'
import type { TenantRoleTemplateResponse } from './types/TenantRoleTemplateResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TenantRoleTemplateController {
  listTenantRoleTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TenantRoleTemplateResponse[]>>>
  createTenantRoleTemplate(app: FastifyInstance, input: TenantRoleTemplateRequest, request?: FastifyRequest): Promise<TenantRoleTemplateResponse>
  getTenantRoleTemplateById(app: FastifyInstance, request?: FastifyRequest): Promise<TenantRoleTemplateResponse>
  updateTenantRoleTemplate(app: FastifyInstance, input: TenantRoleTemplateUpdateRequest, request?: FastifyRequest): Promise<TenantRoleTemplateResponse>
  deleteTenantRoleTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
