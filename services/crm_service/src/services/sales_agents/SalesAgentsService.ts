import type { SalesAgent } from './types/SalesAgent'
import type { CreateSalesAgentRequest } from './types/CreateSalesAgentRequest'
import type { UpdateSalesAgentRequest } from './types/UpdateSalesAgentRequest'
import type { SalesAgentListResponse } from './types/SalesAgentListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SalesAgentsController, ListItem, PaginatedResponse } from './SalesAgentsController'

export class SalesAgentsService implements SalesAgentsController {
      public async listSalesAgents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SalesAgentListResponse>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createSalesAgent(app: FastifyInstance, input: CreateSalesAgentRequest, request?: FastifyRequest): Promise<SalesAgent> {
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

      public async updateSalesAgent(app: FastifyInstance, input: UpdateSalesAgentRequest, request?: FastifyRequest): Promise<SalesAgent> {
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
