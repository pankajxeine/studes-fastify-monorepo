import type { ServiceTicketUserContentsRequest } from './types/ServiceTicketUserContentsRequest'
import type { ServiceTicketUserContentsResponse } from './types/ServiceTicketUserContentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketUserContentsController } from './ServiceTicketUserContentsController'

export class ServiceTicketUserContentsService implements ServiceTicketUserContentsController {
  public async listServiceTicketUserContents(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createServiceTicketUserContent(app: FastifyInstance, input: ServiceTicketUserContentsRequest, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse> {
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

  public async getServiceTicketUserContentsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateServiceTicketUserContent(app: FastifyInstance, input: ServiceTicketUserContentsRequest, request?: FastifyRequest): Promise<ServiceTicketUserContentsResponse> {
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

  public async deleteServiceTicketUserContent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
