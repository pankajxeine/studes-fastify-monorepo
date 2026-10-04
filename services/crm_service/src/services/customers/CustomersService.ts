import type { Customer } from './types/Customer'
import type { CreateCustomerRequest } from './types/CreateCustomerRequest'
import type { UpdateCustomerRequest } from './types/UpdateCustomerRequest'
import type { CustomerListResponse } from './types/CustomerListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomersController, ListItem, PaginatedResponse } from './CustomersController'

export class CustomersService implements CustomersController {
      public async listCustomers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerListResponse>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createCustomer(app: FastifyInstance, input: CreateCustomerRequest, request?: FastifyRequest): Promise<Customer> {
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

      public async getCustomer(app: FastifyInstance, request?: FastifyRequest): Promise<Customer> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCustomer(app: FastifyInstance, input: UpdateCustomerRequest, request?: FastifyRequest): Promise<Customer> {
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
