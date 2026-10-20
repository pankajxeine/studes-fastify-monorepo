import type { BranchesRequest } from './types/BranchesRequest'
import type { BranchesResponse } from './types/BranchesResponse'
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
  listBranches(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BranchesResponse[]>>>
  createBranche(app: FastifyInstance, input: BranchesRequest, request?: FastifyRequest): Promise<BranchesResponse>
  getBranchesById(app: FastifyInstance, request?: FastifyRequest): Promise<BranchesResponse>
  updateBranche(app: FastifyInstance, input: BranchesRequest, request?: FastifyRequest): Promise<BranchesResponse>
  deleteBranche(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
