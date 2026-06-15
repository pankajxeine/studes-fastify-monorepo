import type { InstitutesRequest } from './types/InstitutesRequest'
import type { InstitutesResponse } from './types/InstitutesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { InstitutesController } from './InstitutesController'

export class InstitutesService implements InstitutesController {
  public async listInstitutes(app: FastifyInstance, request?: FastifyRequest): Promise<InstitutesResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createInstitute(app: FastifyInstance, input: InstitutesRequest, request?: FastifyRequest): Promise<InstitutesResponse> {
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

  public async getInstitutesById(app: FastifyInstance, request?: FastifyRequest): Promise<InstitutesResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateInstitute(app: FastifyInstance, input: InstitutesRequest, request?: FastifyRequest): Promise<InstitutesResponse> {
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

  public async deleteInstitute(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
