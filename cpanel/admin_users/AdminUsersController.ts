import type { AdminUsersRequest } from './types/AdminUsersRequest'
import type { AdminUsersResponse } from './types/AdminUsersResponse'
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

export interface AdminUsersController {
  listAdminUsers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AdminUsersResponse[]>>>
  createAdminUser(app: FastifyInstance, input: AdminUsersRequest, request?: FastifyRequest): Promise<AdminUsersResponse>
  getAdminUsersById(app: FastifyInstance, request?: FastifyRequest): Promise<AdminUsersResponse>
  updateAdminUser(app: FastifyInstance, input: AdminUsersRequest, request?: FastifyRequest): Promise<AdminUsersResponse>
  deleteAdminUser(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
