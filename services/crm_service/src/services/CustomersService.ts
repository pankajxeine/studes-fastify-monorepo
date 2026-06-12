import type { Customer } from '../openapi/types/Customer'
import type { CreateCustomerRequest } from '../openapi/types/CreateCustomerRequest'
import type { UpdateCustomerRequest } from '../openapi/types/UpdateCustomerRequest'
import type { CustomerListResponse } from '../openapi/types/CustomerListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomersController } from '../openapi/controller/CustomersController'

export class CustomersService implements CustomersController {
  public async listCustomers(app: FastifyInstance,request?: FastifyRequest): Promise<CustomerListResponse> {
    void request
    throw new Error('Not implemented')
  }

  public async createCustomer(app: FastifyInstance, input: CreateCustomerRequest, request?: FastifyRequest): Promise<Customer> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async getCustomer(app: FastifyInstance,request?: FastifyRequest): Promise<Customer> {
    void request
    throw new Error('Not implemented')
  }

  public async updateCustomer(app: FastifyInstance, input: UpdateCustomerRequest, request?: FastifyRequest): Promise<Customer> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async deleteCustomer(app: FastifyInstance,request?: FastifyRequest): Promise<void> {
    void request
    throw new Error('Not implemented')
  }
}
