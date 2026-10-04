import type { RoleTemplatesRequest } from './types/RoleTemplatesRequest'
import type { RoleTemplatesResponse } from './types/RoleTemplatesResponse'
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

export interface RoleTemplatesController {
  listRoleTemplates(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RoleTemplatesResponse[]>>>
  createRoleTemplate(app: FastifyInstance, input: RoleTemplatesRequest, request?: FastifyRequest): Promise<RoleTemplatesResponse>
  getRoleTemplatesById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleTemplatesResponse>
  updateRoleTemplate(app: FastifyInstance, input: RoleTemplatesRequest, request?: FastifyRequest): Promise<RoleTemplatesResponse>
  deleteRoleTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
