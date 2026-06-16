import type { CpanelsRequest } from './types/CpanelsRequest'
import type { CpanelsResponse } from './types/CpanelsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CpanelsController } from './CpanelsController'

export class CpanelsService implements CpanelsController {
  public async listCpanels(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCpanel(app: FastifyInstance, input: CpanelsRequest, request?: FastifyRequest): Promise<CpanelsResponse> {
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

  public async getCpanelsById(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCpanel(app: FastifyInstance, input: CpanelsRequest, request?: FastifyRequest): Promise<CpanelsResponse> {
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

  public async deleteCpanel(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
