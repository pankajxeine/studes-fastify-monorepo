import type { SubPackageUserTiersRequest } from './types/SubPackageUserTiersRequest'
import type { SubPackageUserTiersResponse } from './types/SubPackageUserTiersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackageUserTiersController } from './SubPackageUserTiersController'

export class SubPackageUserTiersService implements SubPackageUserTiersController {
  public async listSubPackageUserTiers(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageUserTiersResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSubPackageUserTier(app: FastifyInstance, input: SubPackageUserTiersRequest, request?: FastifyRequest): Promise<SubPackageUserTiersResponse> {
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

  public async getSubPackageUserTiersById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackageUserTiersResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSubPackageUserTier(app: FastifyInstance, input: SubPackageUserTiersRequest, request?: FastifyRequest): Promise<SubPackageUserTiersResponse> {
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

  public async deleteSubPackageUserTier(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
