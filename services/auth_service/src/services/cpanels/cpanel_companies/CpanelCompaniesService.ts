import type { CpanelCompaniesRequest } from './types/CpanelCompaniesRequest'
import type { CpanelCompaniesResponse } from './types/CpanelCompaniesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CpanelCompaniesController } from './CpanelCompaniesController'

export class CpanelCompaniesService implements CpanelCompaniesController {
  public async listCpanelCompanies(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelCompaniesResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCpanelCompanie(app: FastifyInstance, input: CpanelCompaniesRequest, request?: FastifyRequest): Promise<CpanelCompaniesResponse> {
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

  public async getCpanelCompaniesById(app: FastifyInstance, request?: FastifyRequest): Promise<CpanelCompaniesResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCpanelCompanie(app: FastifyInstance, input: CpanelCompaniesRequest, request?: FastifyRequest): Promise<CpanelCompaniesResponse> {
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

  public async deleteCpanelCompanie(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
