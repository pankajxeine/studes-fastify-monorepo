import type { UserAlertsRequest } from './types/UserAlertsRequest'
import type { UserAlertsResponse } from './types/UserAlertsResponse'
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

export interface UserAlertsController {
  listUserAlerts(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserAlertsResponse[]>>>
  createUserAlert(app: FastifyInstance, input: UserAlertsRequest, request?: FastifyRequest): Promise<UserAlertsResponse>
  getUserAlertsById(app: FastifyInstance, request?: FastifyRequest): Promise<UserAlertsResponse>
  updateUserAlert(app: FastifyInstance, input: UserAlertsRequest, request?: FastifyRequest): Promise<UserAlertsResponse>
  deleteUserAlert(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
