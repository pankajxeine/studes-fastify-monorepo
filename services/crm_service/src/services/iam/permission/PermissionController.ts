import type { PermissionRequest } from './types/PermissionRequest'
import type { PermissionUpdateRequest } from './types/PermissionUpdateRequest'
import type { PermissionResponse } from './types/PermissionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PermissionController {
  listPermission(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PermissionResponse[]>>>
  createPermission(app: FastifyInstance, input: PermissionRequest, request?: FastifyRequest): Promise<PermissionResponse>
  getPermissionById(app: FastifyInstance, request?: FastifyRequest): Promise<PermissionResponse>
  updatePermission(app: FastifyInstance, input: PermissionUpdateRequest, request?: FastifyRequest): Promise<PermissionResponse>
  deletePermission(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
