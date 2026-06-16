import type { SitesRequest } from './types/SitesRequest'
import type { SitesResponse } from './types/SitesResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface SitesController {
  listSites(app: FastifyInstance, request?: FastifyRequest): Promise<SitesResponse[]>
  createSite(app: FastifyInstance, input: SitesRequest, request?: FastifyRequest): Promise<SitesResponse>
  getSitesById(app: FastifyInstance, request?: FastifyRequest): Promise<SitesResponse>
  updateSite(app: FastifyInstance, input: SitesRequest, request?: FastifyRequest): Promise<SitesResponse>
  deleteSite(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
