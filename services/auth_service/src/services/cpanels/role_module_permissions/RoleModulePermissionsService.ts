import type { RoleModulePermissionsRequest } from './types/RoleModulePermissionsRequest'
import type { RoleModulePermissionsResponse } from './types/RoleModulePermissionsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { RoleModulePermissionsController } from './RoleModulePermissionsController'

export class RoleModulePermissionsService implements RoleModulePermissionsController {
  public async listRoleModulePermissions(app: FastifyInstance, request?: FastifyRequest): Promise<RoleModulePermissionsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createRoleModulePermission(app: FastifyInstance, input: RoleModulePermissionsRequest, request?: FastifyRequest): Promise<RoleModulePermissionsResponse> {
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

  public async getRoleModulePermissionsById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleModulePermissionsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateRoleModulePermission(app: FastifyInstance, input: RoleModulePermissionsRequest, request?: FastifyRequest): Promise<RoleModulePermissionsResponse> {
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

  public async deleteRoleModulePermission(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
