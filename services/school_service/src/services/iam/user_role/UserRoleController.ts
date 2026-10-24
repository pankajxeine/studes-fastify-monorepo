import type { UserRoleRequest } from './types/UserRoleRequest'
import type { UserRoleUpdateRequest } from './types/UserRoleUpdateRequest'
import type { UserRoleResponse } from './types/UserRoleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface UserRoleController {
  listUserRole(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserRoleResponse[]>>>
  createUserRole(app: FastifyInstance, input: UserRoleRequest, request?: FastifyRequest): Promise<UserRoleResponse>
  getUserRoleById(app: FastifyInstance, request?: FastifyRequest): Promise<UserRoleResponse>
  updateUserRole(app: FastifyInstance, input: UserRoleUpdateRequest, request?: FastifyRequest): Promise<UserRoleResponse>
  deleteUserRole(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
