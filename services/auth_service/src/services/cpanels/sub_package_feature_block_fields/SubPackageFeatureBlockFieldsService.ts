import type { SubPackageFeatureBlockFieldsRequest } from './types/SubPackageFeatureBlockFieldsRequest'
import type { SubPackageFeatureBlockFieldsResponse } from './types/SubPackageFeatureBlockFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackageFeatureBlockFieldsController } from './SubPackageFeatureBlockFieldsController'

export class SubPackageFeatureBlockFieldsService implements SubPackageFeatureBlockFieldsController {
  public async listSubPackageFeatureBlockFields(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSubPackageFeatureBlockField(app: FastifyInstance, input: SubPackageFeatureBlockFieldsRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse> {
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

  public async getSubPackageFeatureBlockFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSubPackageFeatureBlockField(app: FastifyInstance, input: SubPackageFeatureBlockFieldsRequest, request?: FastifyRequest): Promise<SubPackageFeatureBlockFieldsResponse> {
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

  public async deleteSubPackageFeatureBlockField(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
