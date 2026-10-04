import type { CrmRole } from './types/CrmRole'
import type { CreateCrmRoleRequest } from './types/CreateCrmRoleRequest'
import type { UpdateCrmRoleRequest } from './types/UpdateCrmRoleRequest'
import type { CrmRoleListResponse } from './types/CrmRoleListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmRolesController, ListItem, PaginatedResponse } from './CrmRolesController'

export class CrmRolesService implements CrmRolesController {
      public async listCrmRoles(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmRoleListResponse>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createCrmRole(app: FastifyInstance, input: CreateCrmRoleRequest, request?: FastifyRequest): Promise<CrmRole> {
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

      public async getCrmRole(app: FastifyInstance, request?: FastifyRequest): Promise<CrmRole> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCrmRole(app: FastifyInstance, input: UpdateCrmRoleRequest, request?: FastifyRequest): Promise<CrmRole> {
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

      public async deleteCrmRole(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
