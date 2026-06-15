import type { PackageFeatureBlocksRequest } from './types/PackageFeatureBlocksRequest'
import type { PackageFeatureBlocksResponse } from './types/PackageFeatureBlocksResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageFeatureBlocksController } from './PackageFeatureBlocksController'

export class PackageFeatureBlocksService implements PackageFeatureBlocksController {
  public async listPackageFeatureBlocks(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeatureBlocksResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createPackageFeatureBlock(app: FastifyInstance, input: PackageFeatureBlocksRequest, request?: FastifyRequest): Promise<PackageFeatureBlocksResponse> {
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

  public async getPackageFeatureBlocksById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageFeatureBlocksResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updatePackageFeatureBlock(app: FastifyInstance, input: PackageFeatureBlocksRequest, request?: FastifyRequest): Promise<PackageFeatureBlocksResponse> {
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

  public async deletePackageFeatureBlock(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
