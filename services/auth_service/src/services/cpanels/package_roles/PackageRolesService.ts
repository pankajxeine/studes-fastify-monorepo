import type { PackageRolesRequest } from './types/PackageRolesRequest'
import type { PackageRolesResponse } from './types/PackageRolesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageRolesController } from './PackageRolesController'

export class PackageRolesService implements PackageRolesController {
  public async listPackageRoles(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRolesResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createPackageRole(app: FastifyInstance, input: PackageRolesRequest, request?: FastifyRequest): Promise<PackageRolesResponse> {
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

  public async getPackageRolesById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRolesResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updatePackageRole(app: FastifyInstance, input: PackageRolesRequest, request?: FastifyRequest): Promise<PackageRolesResponse> {
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

  public async deletePackageRole(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
