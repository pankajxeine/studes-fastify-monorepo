import type { InstituteAuditLogsRequest } from './types/InstituteAuditLogsRequest'
import type { InstituteAuditLogsResponse } from './types/InstituteAuditLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { InstituteAuditLogsController } from './InstituteAuditLogsController'

export class InstituteAuditLogsService implements InstituteAuditLogsController {
  public async listInstituteAuditLogs(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteAuditLogsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createInstituteAuditLog(app: FastifyInstance, input: InstituteAuditLogsRequest, request?: FastifyRequest): Promise<InstituteAuditLogsResponse> {
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

  public async getInstituteAuditLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteAuditLogsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateInstituteAuditLog(app: FastifyInstance, input: InstituteAuditLogsRequest, request?: FastifyRequest): Promise<InstituteAuditLogsResponse> {
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

  public async deleteInstituteAuditLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
