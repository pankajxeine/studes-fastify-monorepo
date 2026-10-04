import type { Branch } from './types/Branch'
import type { CreateBranchRequest } from './types/CreateBranchRequest'
import type { UpdateBranchRequest } from './types/UpdateBranchRequest'
import type { BranchListResponse } from './types/BranchListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { BranchesController, ListItem, PaginatedResponse } from './BranchesController'

export class BranchesService implements BranchesController {
      public async listBranches(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BranchListResponse>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createBranch(app: FastifyInstance, input: CreateBranchRequest, request?: FastifyRequest): Promise<Branch> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateBranch(app: FastifyInstance, input: UpdateBranchRequest, request?: FastifyRequest): Promise<Branch> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
