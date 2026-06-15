import type { CustomerNumbersRequest } from './types/CustomerNumbersRequest'
import type { CustomerNumbersResponse } from './types/CustomerNumbersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerNumbersController } from './CustomerNumbersController'

export class CustomerNumbersService implements CustomerNumbersController {
  public async listCustomerNumbers(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerNumbersResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerNumber(app: FastifyInstance, input: CustomerNumbersRequest, request?: FastifyRequest): Promise<CustomerNumbersResponse> {
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

  public async getCustomerNumbersById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerNumbersResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCustomerNumber(app: FastifyInstance, input: CustomerNumbersRequest, request?: FastifyRequest): Promise<CustomerNumbersResponse> {
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

  public async deleteCustomerNumber(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
