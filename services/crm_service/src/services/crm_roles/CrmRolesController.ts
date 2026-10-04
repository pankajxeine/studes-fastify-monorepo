import type { CrmRole } from './types/CrmRole'
import type { CreateCrmRoleRequest } from './types/CreateCrmRoleRequest'
import type { UpdateCrmRoleRequest } from './types/UpdateCrmRoleRequest'
import type { CrmRoleListResponse } from './types/CrmRoleListResponse'
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

export interface CrmRolesController {
  listCrmRoles(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmRoleListResponse>>>
  createCrmRole(app: FastifyInstance, input: CreateCrmRoleRequest, request?: FastifyRequest): Promise<CrmRole>
  getCrmRole(app: FastifyInstance, request?: FastifyRequest): Promise<CrmRole>
  updateCrmRole(app: FastifyInstance, input: UpdateCrmRoleRequest, request?: FastifyRequest): Promise<CrmRole>
  deleteCrmRole(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
