import type { CrmsRequest } from './types/CrmsRequest'
import type { CrmsResponse } from './types/CrmsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CrmsController } from './CrmsController'

export class CrmsService implements CrmsController {
  public async listCrms(app: FastifyInstance, request?: FastifyRequest): Promise<CrmsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCrm(app: FastifyInstance, input: CrmsRequest, request?: FastifyRequest): Promise<CrmsResponse> {
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

  public async getCrmsById(app: FastifyInstance, request?: FastifyRequest): Promise<CrmsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCrm(app: FastifyInstance, input: CrmsRequest, request?: FastifyRequest): Promise<CrmsResponse> {
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

  public async deleteCrm(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
