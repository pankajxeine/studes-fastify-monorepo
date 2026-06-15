import type { SubPackagesRequest } from './types/SubPackagesRequest'
import type { SubPackagesResponse } from './types/SubPackagesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubPackagesController } from './SubPackagesController'

export class SubPackagesService implements SubPackagesController {
  public async listSubPackages(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackagesResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSubPackage(app: FastifyInstance, input: SubPackagesRequest, request?: FastifyRequest): Promise<SubPackagesResponse> {
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

  public async getSubPackagesById(app: FastifyInstance, request?: FastifyRequest): Promise<SubPackagesResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSubPackage(app: FastifyInstance, input: SubPackagesRequest, request?: FastifyRequest): Promise<SubPackagesResponse> {
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

  public async deleteSubPackage(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
