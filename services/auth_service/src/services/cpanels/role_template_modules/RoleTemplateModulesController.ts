import type { RoleTemplateModulesRequest } from './types/RoleTemplateModulesRequest'
import type { RoleTemplateModulesResponse } from './types/RoleTemplateModulesResponse'
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

export interface RoleTemplateModulesController {
  listRoleTemplateModules(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RoleTemplateModulesResponse[]>>>
  createRoleTemplateModule(app: FastifyInstance, input: RoleTemplateModulesRequest, request?: FastifyRequest): Promise<RoleTemplateModulesResponse>
  getRoleTemplateModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleTemplateModulesResponse>
  updateRoleTemplateModule(app: FastifyInstance, input: RoleTemplateModulesRequest, request?: FastifyRequest): Promise<RoleTemplateModulesResponse>
  deleteRoleTemplateModule(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
