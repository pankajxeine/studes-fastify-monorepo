import type { CpanelUser } from './types/CpanelUser'
import type { CreateCpanelUserRequest } from './types/CreateCpanelUserRequest'
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

export interface CpanelUsersController {
  createSalesCpanelUser(app: FastifyInstance, input: CreateCpanelUserRequest, request?: FastifyRequest): Promise<CpanelUser>
}
