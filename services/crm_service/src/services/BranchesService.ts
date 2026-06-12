import type { Branch } from '../openapi/types/Branch'
import type { CreateBranchRequest } from '../openapi/types/CreateBranchRequest'
import type { UpdateBranchRequest } from '../openapi/types/UpdateBranchRequest'
import type { BranchListResponse } from '../openapi/types/BranchListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { BranchesController } from '../openapi/controller/BranchesController'

export class BranchesService implements BranchesController {
  public async listBranches(app: FastifyInstance,request?: FastifyRequest): Promise<BranchListResponse> {
    void request
    throw new Error('Not implemented')
  }

  public async createBranch(app: FastifyInstance, input: CreateBranchRequest, request?: FastifyRequest): Promise<Branch> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async updateBranch(app: FastifyInstance, input: UpdateBranchRequest, request?: FastifyRequest): Promise<Branch> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
