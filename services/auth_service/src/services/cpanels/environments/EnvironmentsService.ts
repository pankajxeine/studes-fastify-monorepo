import type { EnvironmentsRequest } from './types/EnvironmentsRequest'
import type { EnvironmentsResponse } from './types/EnvironmentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { EnvironmentsController } from './EnvironmentsController'

export class EnvironmentsService implements EnvironmentsController {
  public async listEnvironments(app: FastifyInstance, request?: FastifyRequest): Promise<EnvironmentsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createEnvironment(app: FastifyInstance, input: EnvironmentsRequest, request?: FastifyRequest): Promise<EnvironmentsResponse> {
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

  public async getEnvironmentsById(app: FastifyInstance, request?: FastifyRequest): Promise<EnvironmentsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateEnvironment(app: FastifyInstance, input: EnvironmentsRequest, request?: FastifyRequest): Promise<EnvironmentsResponse> {
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

  public async deleteEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
