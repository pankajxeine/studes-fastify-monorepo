import type { CpanelUser } from './types/CpanelUser'
import type { CreateCpanelUserRequest } from './types/CreateCpanelUserRequest'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CpanelUsersController, ListItem, PaginatedResponse } from './CpanelUsersController'

export class CpanelUsersService implements CpanelUsersController {
      public async createSalesCpanelUser(app: FastifyInstance, input: CreateCpanelUserRequest, request?: FastifyRequest): Promise<CpanelUser> {
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

}
