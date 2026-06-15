import type { SubPackageFeatureBlocksRequest } from './types/SubPackageFeatureBlocksRequest'
import type { SubPackageFeatureBlocksResponse } from './types/SubPackageFeatureBlocksResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackageFeatureBlocksController } from './SubPackageFeatureBlocksController'

export class SubPackageFeatureBlocksService implements SubPackageFeatureBlocksController {
  public async listSubPackageFeatureBlocks(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeatureBlocksResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSubPackageFeatureBlock(app: FastifyInstance, input: SubPackageFeatureBlocksRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlocksResponse> {
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

  public async getSubPackageFeatureBlocksById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeatureBlocksResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSubPackageFeatureBlock(app: FastifyInstance, input: SubPackageFeatureBlocksRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlocksResponse> {
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

  public async deleteSubPackageFeatureBlock(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }
}
