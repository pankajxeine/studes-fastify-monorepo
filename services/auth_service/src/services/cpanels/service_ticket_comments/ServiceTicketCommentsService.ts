import type { ServiceTicketCommentsRequest } from './types/ServiceTicketCommentsRequest'
import type { ServiceTicketCommentsResponse } from './types/ServiceTicketCommentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketCommentsController } from './ServiceTicketCommentsController'

export class ServiceTicketCommentsService implements ServiceTicketCommentsController {
  public async listServiceTicketComments(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createServiceTicketComment(app: FastifyInstance, input: ServiceTicketCommentsRequest, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse> {
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

  public async getServiceTicketCommentsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateServiceTicketComment(app: FastifyInstance, input: ServiceTicketCommentsRequest, request?: FastifyRequest): Promise<ServiceTicketCommentsResponse> {
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

  public async deleteServiceTicketComment(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
