import type { UserTiersRequest } from './types/UserTiersRequest'
import type { UserTiersResponse } from './types/UserTiersResponse'
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

export interface UserTiersController {
  listUserTiers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserTiersResponse[]>>>
  createUserTier(app: FastifyInstance, input: UserTiersRequest, request?: FastifyRequest): Promise<UserTiersResponse>
  getUserTiersById(app: FastifyInstance, request?: FastifyRequest): Promise<UserTiersResponse>
  updateUserTier(app: FastifyInstance, input: UserTiersRequest, request?: FastifyRequest): Promise<UserTiersResponse>
  deleteUserTier(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
