import type { CustomerStatusRequest } from './types/CustomerStatusRequest'
import type { CustomerStatusResponse } from './types/CustomerStatusResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerStatusController } from './CustomerStatusController'

export class CustomerStatusService implements CustomerStatusController {
  public async listCustomerStatus(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerStatu(app: FastifyInstance, input: CustomerStatusRequest, request?: FastifyRequest): Promise<CustomerStatusResponse> {
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

  public async getCustomerStatusById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCustomerStatu(app: FastifyInstance, input: CustomerStatusRequest, request?: FastifyRequest): Promise<CustomerStatusResponse> {
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

  public async deleteCustomerStatu(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
