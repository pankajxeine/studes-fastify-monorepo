import type { IndustryEnvironmentsRequest } from './types/IndustryEnvironmentsRequest'
import type { IndustryEnvironmentsResponse } from './types/IndustryEnvironmentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { IndustryEnvironmentsController } from './IndustryEnvironmentsController'

export class IndustryEnvironmentsService implements IndustryEnvironmentsController {
  public async listIndustryEnvironments(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createIndustryEnvironment(app: FastifyInstance, input: IndustryEnvironmentsRequest, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse> {
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

  public async getIndustryEnvironmentsById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateIndustryEnvironment(app: FastifyInstance, input: IndustryEnvironmentsRequest, request?: FastifyRequest): Promise<IndustryEnvironmentsResponse> {
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

  public async deleteIndustryEnvironment(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
