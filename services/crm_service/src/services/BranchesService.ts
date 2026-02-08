import type { Branch } from '../openapi/types/Branch'
import type { CreateBranchRequest } from '../openapi/types/CreateBranchRequest'
import type { UpdateBranchRequest } from '../openapi/types/UpdateBranchRequest'
import type { BranchListResponse } from '../openapi/types/BranchListResponse'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { BranchesController } from '../openapi/controller/BranchesController'

export class BranchesService implements BranchesController {
  public async listBranches(headers?: RequestHeaders): Promise<BranchListResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async createBranch(input: CreateBranchRequest, headers?: RequestHeaders): Promise<Branch> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async updateBranch(input: UpdateBranchRequest, headers?: RequestHeaders): Promise<Branch> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
