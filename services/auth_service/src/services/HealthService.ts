import type { HealthResponse } from '../openapi/types/HealthResponse'
import type { HealthDbResponse } from '../openapi/types/HealthDbResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { HealthController } from '../openapi/controller/HealthController'

export class HealthService implements HealthController {
  public async authHealth(app: FastifyInstance,request?: FastifyRequest): Promise<HealthResponse> {
    void request
    throw new Error('Not implemented')
  }

  public async authHealthDb(app: FastifyInstance,request?: FastifyRequest): Promise<HealthDbResponse> {
    void request
    throw new Error('Not implemented')
  }
}
