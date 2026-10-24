import type { RoleConflictRequest } from './types/RoleConflictRequest'
import type { RoleConflictUpdateRequest } from './types/RoleConflictUpdateRequest'
import type { RoleConflictResponse } from './types/RoleConflictResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RoleConflictController {
  listRoleConflict(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RoleConflictResponse[]>>>
  createRoleConflict(app: FastifyInstance, input: RoleConflictRequest, request?: FastifyRequest): Promise<RoleConflictResponse>
  getRoleConflictById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleConflictResponse>
  updateRoleConflict(app: FastifyInstance, input: RoleConflictUpdateRequest, request?: FastifyRequest): Promise<RoleConflictResponse>
  deleteRoleConflict(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
