import type { Branch } from './types/Branch'
import type { CreateBranchRequest } from './types/CreateBranchRequest'
import type { UpdateBranchRequest } from './types/UpdateBranchRequest'
import type { BranchListResponse } from './types/BranchListResponse'
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

export interface BranchesController {
  listBranches(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BranchListResponse>>>
  createBranch(app: FastifyInstance, input: CreateBranchRequest, request?: FastifyRequest): Promise<Branch>
  updateBranch(app: FastifyInstance, input: UpdateBranchRequest, request?: FastifyRequest): Promise<Branch>
}
