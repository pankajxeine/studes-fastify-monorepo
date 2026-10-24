import type { BranchRequest } from './types/BranchRequest'
import type { BranchUpdateRequest } from './types/BranchUpdateRequest'
import type { BranchResponse } from './types/BranchResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface BranchController {
  listBranch(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BranchResponse[]>>>
  createBranch(app: FastifyInstance, input: BranchRequest, request?: FastifyRequest): Promise<BranchResponse>
  getBranchById(app: FastifyInstance, request?: FastifyRequest): Promise<BranchResponse>
  updateBranch(app: FastifyInstance, input: BranchUpdateRequest, request?: FastifyRequest): Promise<BranchResponse>
  deleteBranch(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
