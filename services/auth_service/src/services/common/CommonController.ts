import type { GetCpanelRouteDomainResponse } from './types/GetCpanelRouteDomainResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export interface CommonController {
  cpanelRouteDomain(app: FastifyInstance, request?: FastifyRequest): Promise<GetCpanelRouteDomainResponse>
}
