import type { SalesAgentsRequest } from './types/SalesAgentsRequest'
import type { SalesAgentsResponse } from './types/SalesAgentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SalesAgentsController } from './SalesAgentsController'

export class SalesAgentsService implements SalesAgentsController {
  public async listSalesAgents(app: FastifyInstance, request?: FastifyRequest): Promise<SalesAgentsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSalesAgent(app: FastifyInstance, input: SalesAgentsRequest, request?: FastifyRequest): Promise<SalesAgentsResponse> {
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

  public async getSalesAgentsById(app: FastifyInstance, request?: FastifyRequest): Promise<SalesAgentsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSalesAgent(app: FastifyInstance, input: SalesAgentsRequest, request?: FastifyRequest): Promise<SalesAgentsResponse> {
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

  public async deleteSalesAgent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
