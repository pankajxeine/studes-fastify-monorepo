import type { GetCpanelRouteDomainResponse } from './types/GetCpanelRouteDomainResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'

export interface CommonController {
  onboardCrmOrganization(app: FastifyInstance, input: {
  name: string
  slug: string
  schema_name: string
  domain: string
  db_name?: string
  title?: string
  description?: string
  api_endpoint?: string
  web_endpoint?: string
  logo_url?: string
  favicon_url?: string
  images?: string[]
  config?: Record<string, unknown>
}, request?: FastifyRequest): Promise<void>
  cpanelRouteDomain(app: FastifyInstance, request?: FastifyRequest): Promise<GetCpanelRouteDomainResponse>
}
