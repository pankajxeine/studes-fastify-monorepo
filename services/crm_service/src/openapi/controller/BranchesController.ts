import type { Branch } from '../types/Branch'
import type { CreateBranchRequest } from '../types/CreateBranchRequest'
import type { UpdateBranchRequest } from '../types/UpdateBranchRequest'
import type { BranchListResponse } from '../types/BranchListResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface BranchesController {
  listBranches(app: FastifyInstance, request?: FastifyRequest): Promise<BranchListResponse>
  createBranch(app: FastifyInstance, input: CreateBranchRequest, request?: FastifyRequest): Promise<Branch>
  updateBranch(app: FastifyInstance, input: UpdateBranchRequest, request?: FastifyRequest): Promise<Branch>
}
