import type { RoleModulePermissionsRequest } from './types/RoleModulePermissionsRequest'
import type { RoleModulePermissionsResponse } from './types/RoleModulePermissionsResponse'
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

export interface RoleModulePermissionsController {
  listRoleModulePermissions(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RoleModulePermissionsResponse[]>>>
  createRoleModulePermission(app: FastifyInstance, input: RoleModulePermissionsRequest, request?: FastifyRequest): Promise<RoleModulePermissionsResponse>
  getRoleModulePermissionsById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleModulePermissionsResponse>
  updateRoleModulePermission(app: FastifyInstance, input: RoleModulePermissionsRequest, request?: FastifyRequest): Promise<RoleModulePermissionsResponse>
  deleteRoleModulePermission(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
