import type { RolesRequest } from './types/RolesRequest'
import type { RolesResponse } from './types/RolesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { RolesController } from './RolesController'

export class RolesService implements RolesController {
  public async listRoles(app: FastifyInstance, request?: FastifyRequest): Promise<RolesResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createRole(app: FastifyInstance, input: RolesRequest, request?: FastifyRequest): Promise<RolesResponse> {
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

  public async getRolesById(app: FastifyInstance, request?: FastifyRequest): Promise<RolesResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateRole(app: FastifyInstance, input: RolesRequest, request?: FastifyRequest): Promise<RolesResponse> {
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

  public async deleteRole(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
