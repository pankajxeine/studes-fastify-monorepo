import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SampleFastifySequelizeController, ListItem, PaginatedResponse } from './SampleFastifySequelizeController'

export class SampleFastifySequelizeService implements SampleFastifySequelizeController {
      public async getUsers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<unknown>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async postUsers(app: FastifyInstance, input: unknown, request?: FastifyRequest): Promise<unknown> {
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

      public async getHealth(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<unknown>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async postLogin(app: FastifyInstance, input: unknown, request?: FastifyRequest): Promise<unknown> {
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

      public async postLogout(app: FastifyInstance, request?: FastifyRequest): Promise<unknown> {
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
