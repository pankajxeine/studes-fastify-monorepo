import type { PackagesRequest } from './types/PackagesRequest'
import type { PackagesResponse } from './types/PackagesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackagesController } from './PackagesController'

export class PackagesService implements PackagesController {
  public async listPackages(app: FastifyInstance, request?: FastifyRequest): Promise<PackagesResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createPackage(app: FastifyInstance, input: PackagesRequest, request?: FastifyRequest): Promise<PackagesResponse> {
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

  public async getPackagesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackagesResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updatePackage(app: FastifyInstance, input: PackagesRequest, request?: FastifyRequest): Promise<PackagesResponse> {
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

  public async deletePackage(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
