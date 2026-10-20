import type { UserBranchesRequest } from './types/UserBranchesRequest'
import type { UserBranchesResponse } from './types/UserBranchesResponse'
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

export interface UserBranchesController {
  listUserBranches(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserBranchesResponse[]>>>
  createUserBranche(app: FastifyInstance, input: UserBranchesRequest, request?: FastifyRequest): Promise<UserBranchesResponse>
  getUserBranchesById(app: FastifyInstance, request?: FastifyRequest): Promise<UserBranchesResponse>
  updateUserBranche(app: FastifyInstance, input: UserBranchesRequest, request?: FastifyRequest): Promise<UserBranchesResponse>
  deleteUserBranche(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
