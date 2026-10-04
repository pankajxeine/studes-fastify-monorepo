import type { RolesRequest } from './types/RolesRequest'
import type { RolesResponse } from './types/RolesResponse'
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

export interface RolesController {
  listRoles(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RolesResponse[]>>>
  createRole(app: FastifyInstance, input: RolesRequest, request?: FastifyRequest): Promise<RolesResponse>
  getRolesById(app: FastifyInstance, request?: FastifyRequest): Promise<RolesResponse>
  updateRole(app: FastifyInstance, input: RolesRequest, request?: FastifyRequest): Promise<RolesResponse>
  deleteRole(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
