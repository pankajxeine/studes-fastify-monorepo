import type { HealthResponse } from '../types/HealthResponse'
import type { HealthDbResponse } from '../types/HealthDbResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface HealthController {
  authHealth(app: FastifyInstance, request?: FastifyRequest): Promise<HealthResponse>
  authHealthDb(app: FastifyInstance, request?: FastifyRequest): Promise<HealthDbResponse>
}
