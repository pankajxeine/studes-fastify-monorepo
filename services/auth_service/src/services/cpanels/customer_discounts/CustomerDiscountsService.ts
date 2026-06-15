import type { CustomerDiscountsRequest } from './types/CustomerDiscountsRequest'
import type { CustomerDiscountsResponse } from './types/CustomerDiscountsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerDiscountsController } from './CustomerDiscountsController'

export class CustomerDiscountsService implements CustomerDiscountsController {
  public async listCustomerDiscounts(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDiscountsResponse[]> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerDiscount(app: FastifyInstance, input: CustomerDiscountsRequest, request?: FastifyRequest): Promise<CustomerDiscountsResponse> {
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

  public async getCustomerDiscountsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDiscountsResponse> {
    try {
      // TODO: implement logic using app + request
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCustomerDiscount(app: FastifyInstance, input: CustomerDiscountsRequest, request?: FastifyRequest): Promise<CustomerDiscountsResponse> {
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

  public async deleteCustomerDiscount(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
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
