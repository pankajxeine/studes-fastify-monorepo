import type { Package } from './types/Package'
import type { CreatePackageRequest } from './types/CreatePackageRequest'
import type { UpdatePackageRequest } from './types/UpdatePackageRequest'
import type { PackageListResponse } from './types/PackageListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackagesController, ListItem, PaginatedResponse } from './PackagesController'

export class PackagesService implements PackagesController {
      public async listPackages(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PackageListResponse>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createPackage(app: FastifyInstance, input: CreatePackageRequest, request?: FastifyRequest): Promise<Package> {
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

      public async getPackage(app: FastifyInstance, request?: FastifyRequest): Promise<Package> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePackage(app: FastifyInstance, input: UpdatePackageRequest, request?: FastifyRequest): Promise<Package> {
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
