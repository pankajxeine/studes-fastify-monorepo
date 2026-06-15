import type { CustomersRequest } from './types/CustomersRequest'
import type { CustomersResponse } from './types/CustomersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomersController } from './CustomersController'

export class CustomersService implements CustomersController {
  public async listCustomers(app: FastifyInstance, request?: FastifyRequest): Promise<CustomersResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomer(app: FastifyInstance, input: CustomersRequest, request?: FastifyRequest): Promise<CustomersResponse> {
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

  public async getCustomersById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomersResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCustomer(app: FastifyInstance, input: CustomersRequest, request?: FastifyRequest): Promise<CustomersResponse> {
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

  public async deleteCustomer(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
