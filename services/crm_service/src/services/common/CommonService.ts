import type { GetCpanelRouteDomainResponse } from './types/GetCpanelRouteDomainResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { CommonController } from './CommonController'

export class CommonService implements CommonController {
  public async onboardCrmOrganization(app: FastifyInstance, input: {
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
  }, request?: FastifyRequest): Promise<void> {
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

  public async cpanelRouteDomain(app: FastifyInstance, request?: FastifyRequest): Promise<GetCpanelRouteDomainResponse> {
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
