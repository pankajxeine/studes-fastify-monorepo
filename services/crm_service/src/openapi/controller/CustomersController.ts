import type { Customer } from '../types/Customer'
import type { CreateCustomerRequest } from '../types/CreateCustomerRequest'
import type { UpdateCustomerRequest } from '../types/UpdateCustomerRequest'
import type { CustomerListResponse } from '../types/CustomerListResponse'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface CustomersController {
  listCustomers(headers?: RequestHeaders): Promise<CustomerListResponse>
  createCustomer(input: CreateCustomerRequest, headers?: RequestHeaders): Promise<Customer>
  getCustomer(headers?: RequestHeaders): Promise<Customer>
  updateCustomer(input: UpdateCustomerRequest, headers?: RequestHeaders): Promise<Customer>
  deleteCustomer(headers?: RequestHeaders): Promise<void>
}
