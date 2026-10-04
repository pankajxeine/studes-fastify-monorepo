import type { CrmUser } from './types/CrmUser'
import type { CreateCrmUserRequest } from './types/CreateCrmUserRequest'
import type { UpdateCrmUserRequest } from './types/UpdateCrmUserRequest'
import type { CrmUserListResponse } from './types/CrmUserListResponse'
import type { ErrorResponse } from './types/ErrorResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmUsersController, ListItem, PaginatedResponse } from './CrmUsersController'

export class CrmUsersService implements CrmUsersController {
      public async listCrmUsers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CrmUserListResponse>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createCrmUser(app: FastifyInstance, input: CreateCrmUserRequest, request?: FastifyRequest): Promise<CrmUser> {
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

      public async getCrmUser(app: FastifyInstance, request?: FastifyRequest): Promise<CrmUser> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCrmUser(app: FastifyInstance, input: UpdateCrmUserRequest, request?: FastifyRequest): Promise<CrmUser> {
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

      public async deleteCrmUser(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
