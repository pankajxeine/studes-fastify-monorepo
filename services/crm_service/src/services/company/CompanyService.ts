import type { CompanyProfile } from './types/CompanyProfile'
import type { UpdateCompanyProfileRequest } from './types/UpdateCompanyProfileRequest'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CompanyController, ListItem, PaginatedResponse } from './CompanyController'

export class CompanyService implements CompanyController {
      public async getCompanyProfile(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CompanyProfile>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCompanyProfile(app: FastifyInstance, input: UpdateCompanyProfileRequest, request?: FastifyRequest): Promise<CompanyProfile> {
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

}
