import type { ServiceTicketTypesRequest } from './types/ServiceTicketTypesRequest'
import type { ServiceTicketTypesResponse } from './types/ServiceTicketTypesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketTypesController } from './ServiceTicketTypesController'

export class ServiceTicketTypesService implements ServiceTicketTypesController {
  public async listServiceTicketTypes(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketTypesResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createServiceTicketType(app: FastifyInstance, input: ServiceTicketTypesRequest, request?: FastifyRequest): Promise<ServiceTicketTypesResponse> {
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

  public async getServiceTicketTypesById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketTypesResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateServiceTicketType(app: FastifyInstance, input: ServiceTicketTypesRequest, request?: FastifyRequest): Promise<ServiceTicketTypesResponse> {
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

  public async deleteServiceTicketType(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
