import type { UserCustomerStatusRequest } from './types/UserCustomerStatusRequest'
import type { UserCustomerStatusResponse } from './types/UserCustomerStatusResponse'
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

export interface UserCustomerStatusController {
  listUserCustomerStatus(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserCustomerStatusResponse[]>>>
  createUserCustomerStatu(app: FastifyInstance, input: UserCustomerStatusRequest, request?: FastifyRequest): Promise<UserCustomerStatusResponse>
  getUserCustomerStatusById(app: FastifyInstance, request?: FastifyRequest): Promise<UserCustomerStatusResponse>
  updateUserCustomerStatu(app: FastifyInstance, input: UserCustomerStatusRequest, request?: FastifyRequest): Promise<UserCustomerStatusResponse>
  deleteUserCustomerStatu(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
