import type { ServiceTicketLogsRequest } from './types/ServiceTicketLogsRequest'
import type { ServiceTicketLogsResponse } from './types/ServiceTicketLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ServiceTicketLogsController } from './ServiceTicketLogsController'

export class ServiceTicketLogsService implements ServiceTicketLogsController {
  public async listServiceTicketLogs(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketLogsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createServiceTicketLog(app: FastifyInstance, input: ServiceTicketLogsRequest, request?: FastifyRequest): Promise<ServiceTicketLogsResponse> {
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

  public async getServiceTicketLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<ServiceTicketLogsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateServiceTicketLog(app: FastifyInstance, input: ServiceTicketLogsRequest, request?: FastifyRequest): Promise<ServiceTicketLogsResponse> {
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

  public async deleteServiceTicketLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
