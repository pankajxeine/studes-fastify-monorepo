import type { Customer } from '../openapi/types/Customer'
import type { CreateCustomerRequest } from '../openapi/types/CreateCustomerRequest'
import type { UpdateCustomerRequest } from '../openapi/types/UpdateCustomerRequest'
import type { CustomerListResponse } from '../openapi/types/CustomerListResponse'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { CustomersController } from '../openapi/controller/CustomersController'

export class CustomersService implements CustomersController {
  public async listCustomers(headers?: RequestHeaders): Promise<CustomerListResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async createCustomer(input: CreateCustomerRequest, headers?: RequestHeaders): Promise<Customer> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async getCustomer(headers?: RequestHeaders): Promise<Customer> {
    void headers
    throw new Error('Not implemented')
  }

  public async updateCustomer(input: UpdateCustomerRequest, headers?: RequestHeaders): Promise<Customer> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async deleteCustomer(headers?: RequestHeaders): Promise<void> {
    void headers
    throw new Error('Not implemented')
  }
}
