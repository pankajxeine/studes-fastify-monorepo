import type { CustomerExportTemplatesFieldsRequest } from './types/CustomerExportTemplatesFieldsRequest'
import type { CustomerExportTemplatesFieldsResponse } from './types/CustomerExportTemplatesFieldsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerExportTemplatesFieldsController } from './CustomerExportTemplatesFieldsController'

export class CustomerExportTemplatesFieldsService implements CustomerExportTemplatesFieldsController {
  public async listCustomerExportTemplatesFields(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerExportTemplatesField(app: FastifyInstance, input: CustomerExportTemplatesFieldsRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse> {
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

  public async getCustomerExportTemplatesFieldsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCustomerExportTemplatesField(app: FastifyInstance, input: CustomerExportTemplatesFieldsRequest, request?: FastifyRequest): Promise<CustomerExportTemplatesFieldsResponse> {
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

  public async deleteCustomerExportTemplatesField(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
