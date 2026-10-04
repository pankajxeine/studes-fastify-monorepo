import type { UserAlertsTypeRequest } from './types/UserAlertsTypeRequest'
import type { UserAlertsTypeResponse } from './types/UserAlertsTypeResponse'
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

export interface UserAlertsTypeController {
  listUserAlertsType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserAlertsTypeResponse[]>>>
  createUserAlertsType(app: FastifyInstance, input: UserAlertsTypeRequest, request?: FastifyRequest): Promise<UserAlertsTypeResponse>
  getUserAlertsTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<UserAlertsTypeResponse>
  updateUserAlertsType(app: FastifyInstance, input: UserAlertsTypeRequest, request?: FastifyRequest): Promise<UserAlertsTypeResponse>
  deleteUserAlertsType(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
