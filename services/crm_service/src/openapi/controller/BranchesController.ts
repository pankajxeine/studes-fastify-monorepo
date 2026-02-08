import type { Branch } from '../types/Branch'
import type { CreateBranchRequest } from '../types/CreateBranchRequest'
import type { UpdateBranchRequest } from '../types/UpdateBranchRequest'
import type { BranchListResponse } from '../types/BranchListResponse'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface BranchesController {
  listBranches(headers?: RequestHeaders): Promise<BranchListResponse>
  createBranch(input: CreateBranchRequest, headers?: RequestHeaders): Promise<Branch>
  updateBranch(input: UpdateBranchRequest, headers?: RequestHeaders): Promise<Branch>
}
