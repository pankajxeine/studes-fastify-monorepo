import type { RoleTemplateModulesRequest } from './types/RoleTemplateModulesRequest'
import type { RoleTemplateModulesResponse } from './types/RoleTemplateModulesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { RoleTemplateModulesController } from './RoleTemplateModulesController'

export class RoleTemplateModulesService implements RoleTemplateModulesController {
  public async listRoleTemplateModules(app: FastifyInstance, request?: FastifyRequest): Promise<RoleTemplateModulesResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createRoleTemplateModule(app: FastifyInstance, input: RoleTemplateModulesRequest, request?: FastifyRequest): Promise<RoleTemplateModulesResponse> {
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

  public async getRoleTemplateModulesById(app: FastifyInstance, request?: FastifyRequest): Promise<RoleTemplateModulesResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateRoleTemplateModule(app: FastifyInstance, input: RoleTemplateModulesRequest, request?: FastifyRequest): Promise<RoleTemplateModulesResponse> {
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

  public async deleteRoleTemplateModule(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
