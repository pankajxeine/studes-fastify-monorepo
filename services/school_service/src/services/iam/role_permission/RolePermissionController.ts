import type { RolePermissionRequest } from './types/RolePermissionRequest'
import type { RolePermissionUpdateRequest } from './types/RolePermissionUpdateRequest'
import type { RolePermissionResponse } from './types/RolePermissionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RolePermissionController {
  listRolePermission(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RolePermissionResponse[]>>>
  createRolePermission(app: FastifyInstance, input: RolePermissionRequest, request?: FastifyRequest): Promise<RolePermissionResponse>
  getRolePermissionById(app: FastifyInstance, request?: FastifyRequest): Promise<RolePermissionResponse>
  updateRolePermission(app: FastifyInstance, input: RolePermissionUpdateRequest, request?: FastifyRequest): Promise<RolePermissionResponse>
  deleteRolePermission(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
