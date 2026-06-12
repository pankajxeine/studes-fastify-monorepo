import type { GetCpanelRouteDomainResponse } from '../openapi/types/GetCpanelRouteDomainResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CpanelRouteController } from '../openapi/controller/CpanelRouteController'

export class CpanelRouteService implements CpanelRouteController {
  public async cpanelRouteDomain(app: FastifyInstance,request?: FastifyRequest): Promise<GetCpanelRouteDomainResponse> {
    void request
    throw new Error('Not implemented')
  }
}
