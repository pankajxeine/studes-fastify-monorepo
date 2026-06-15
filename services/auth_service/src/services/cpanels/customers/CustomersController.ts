import type { CustomersRequest } from './types/CustomersRequest'
import type { CustomersResponse } from './types/CustomersResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface CustomersController {
  listCustomers(app: FastifyInstance, request?: FastifyRequest): Promise<CustomersResponse[]>
  createCustomer(app: FastifyInstance, input: CustomersRequest, request?: FastifyRequest): Promise<CustomersResponse>
  getCustomersById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomersResponse>
  updateCustomer(app: FastifyInstance, input: CustomersRequest, request?: FastifyRequest): Promise<CustomersResponse>
  deleteCustomer(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
