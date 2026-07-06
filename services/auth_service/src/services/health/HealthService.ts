import type { HealthResponse } from './types/HealthResponse'
import type { HealthDbResponse } from './types/HealthDbResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { HealthController } from './HealthController'

export class HealthService implements HealthController {
  public async authHealth(app: FastifyInstance, request?: FastifyRequest): Promise<HealthResponse> {
    try {
      // TODO: implement logic using app + request
      
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async authHealthDb(app: FastifyInstance, request?: FastifyRequest): Promise<HealthDbResponse> {
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
