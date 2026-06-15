import type { CustomerExportTemplatesRequest } from './types/CustomerExportTemplatesRequest'
import type { CustomerExportTemplatesResponse } from './types/CustomerExportTemplatesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerExportTemplatesController } from './CustomerExportTemplatesController'

export class CustomerExportTemplatesService implements CustomerExportTemplatesController {
  public async listCustomerExportTemplates(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerExportTemplatesResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerExportTemplate(app: FastifyInstance, input: CustomerExportTemplatesRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesResponse> {
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

  public async getCustomerExportTemplatesById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerExportTemplatesResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCustomerExportTemplate(app: FastifyInstance, input: CustomerExportTemplatesRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesResponse> {
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

  public async deleteCustomerExportTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
