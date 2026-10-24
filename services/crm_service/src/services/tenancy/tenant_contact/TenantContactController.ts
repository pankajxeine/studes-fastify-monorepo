import type { TenantContactRequest } from './types/TenantContactRequest'
import type { TenantContactUpdateRequest } from './types/TenantContactUpdateRequest'
import type { TenantContactResponse } from './types/TenantContactResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TenantContactController {
  listTenantContact(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TenantContactResponse[]>>>
  createTenantContact(app: FastifyInstance, input: TenantContactRequest, request?: FastifyRequest): Promise<TenantContactResponse>
  getTenantContactById(app: FastifyInstance, request?: FastifyRequest): Promise<TenantContactResponse>
  updateTenantContact(app: FastifyInstance, input: TenantContactUpdateRequest, request?: FastifyRequest): Promise<TenantContactResponse>
  deleteTenantContact(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
