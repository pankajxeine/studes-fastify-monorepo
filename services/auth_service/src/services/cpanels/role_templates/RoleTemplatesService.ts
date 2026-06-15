import type { RoleTemplatesRequest } from './types/RoleTemplatesRequest'
import type { RoleTemplatesResponse } from './types/RoleTemplatesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { RoleTemplatesController } from './RoleTemplatesController'

export class RoleTemplatesService implements RoleTemplatesController {
  public async listRoleTemplates(app: FastifyInstance, request?: FastifyRequest): Promise<RoleTemplatesResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createRoleTemplate(app: FastifyInstance, input: RoleTemplatesRequest, request?: FastifyRequest): Promise<RoleTemplatesResponse> {
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

  public async getRoleTemplatesById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleTemplatesResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateRoleTemplate(app: FastifyInstance, input: RoleTemplatesRequest, request?: FastifyRequest): Promise<RoleTemplatesResponse> {
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

  public async deleteRoleTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
