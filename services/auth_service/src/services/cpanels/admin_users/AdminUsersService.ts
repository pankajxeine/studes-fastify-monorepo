import type { AdminUsersRequest } from './types/AdminUsersRequest'
import type { AdminUsersResponse } from './types/AdminUsersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { AdminUsersController } from './AdminUsersController'

export class AdminUsersService implements AdminUsersController {
  public async listAdminUsers(app: FastifyInstance, request?: FastifyRequest): Promise<AdminUsersResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createAdminUser(app: FastifyInstance, input: AdminUsersRequest, request?: FastifyRequest): Promise<AdminUsersResponse> {
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

  public async getAdminUsersById(app: FastifyInstance, request?: FastifyRequest): Promise<AdminUsersResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateAdminUser(app: FastifyInstance, input: AdminUsersRequest, request?: FastifyRequest): Promise<AdminUsersResponse> {
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

  public async deleteAdminUser(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
