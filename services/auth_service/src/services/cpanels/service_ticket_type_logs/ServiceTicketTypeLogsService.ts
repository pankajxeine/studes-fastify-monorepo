import type { ServiceTicketTypeLogsRequest } from './types/ServiceTicketTypeLogsRequest'
import type { ServiceTicketTypeLogsResponse } from './types/ServiceTicketTypeLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketTypeLogsController } from './ServiceTicketTypeLogsController'

export class ServiceTicketTypeLogsService implements ServiceTicketTypeLogsController {
  public async listServiceTicketTypeLogs(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketTypeLogsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createServiceTicketTypeLog(app: FastifyInstance, input: ServiceTicketTypeLogsRequest, request?: FastifyRequest): Promise<ServiceTicketTypeLogsResponse> {
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

  public async getServiceTicketTypeLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketTypeLogsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateServiceTicketTypeLog(app: FastifyInstance, input: ServiceTicketTypeLogsRequest, request?: FastifyRequest): Promise<ServiceTicketTypeLogsResponse> {
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

  public async deleteServiceTicketTypeLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
