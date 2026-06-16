import type { SitesRequest } from './types/SitesRequest'
import type { SitesResponse } from './types/SitesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { SitesController } from './SitesController'

export class SitesService implements SitesController {
  public async listSites(app: FastifyInstance, request?: FastifyRequest): Promise<SitesResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createSite(app: FastifyInstance, input: SitesRequest, request?: FastifyRequest): Promise<SitesResponse> {
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

  public async getSitesById(app: FastifyInstance, request?: FastifyRequest): Promise<SitesResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateSite(app: FastifyInstance, input: SitesRequest, request?: FastifyRequest): Promise<SitesResponse> {
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

  public async deleteSite(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
