import type { Customer } from './types/Customer'
import type { CreateCustomerRequest } from './types/CreateCustomerRequest'
import type { UpdateCustomerRequest } from './types/UpdateCustomerRequest'
import type { CustomerListResponse } from './types/CustomerListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface CustomersController {
  listCustomers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerListResponse>>>
  createCustomer(app: FastifyInstance, input: CreateCustomerRequest, request?: FastifyRequest): Promise<Customer>
  getCustomer(app: FastifyInstance, request?: FastifyRequest): Promise<Customer>
  updateCustomer(app: FastifyInstance, input: UpdateCustomerRequest, request?: FastifyRequest): Promise<Customer>
  deleteCustomer(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
