import type { PackageRoleMappingsRequest } from './types/PackageRoleMappingsRequest'
import type { PackageRoleMappingsResponse } from './types/PackageRoleMappingsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { PackageRoleMappingsController } from './PackageRoleMappingsController'

export class PackageRoleMappingsService implements PackageRoleMappingsController {
  public async listPackageRoleMappings(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRoleMappingsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createPackageRoleMapping(app: FastifyInstance, input: PackageRoleMappingsRequest, request?: FastifyRequest): Promise<PackageRoleMappingsResponse> {
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

  public async getPackageRoleMappingsById(app: FastifyInstance, request?: FastifyRequest): Promise<PackageRoleMappingsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updatePackageRoleMapping(app: FastifyInstance, input: PackageRoleMappingsRequest, request?: FastifyRequest): Promise<PackageRoleMappingsResponse> {
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

  public async deletePackageRoleMapping(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
