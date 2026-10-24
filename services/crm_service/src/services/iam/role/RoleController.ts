import type { RoleRequest } from './types/RoleRequest'
import type { RoleUpdateRequest } from './types/RoleUpdateRequest'
import type { RoleResponse } from './types/RoleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RoleController {
  listRole(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RoleResponse[]>>>
  createRole(app: FastifyInstance, input: RoleRequest, request?: FastifyRequest): Promise<RoleResponse>
  getRoleById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleResponse>
  updateRole(app: FastifyInstance, input: RoleUpdateRequest, request?: FastifyRequest): Promise<RoleResponse>
  deleteRole(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
