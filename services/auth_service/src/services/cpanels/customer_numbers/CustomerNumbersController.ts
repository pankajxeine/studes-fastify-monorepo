import type { CustomerNumbersRequest } from './types/CustomerNumbersRequest'
import type { CustomerNumbersResponse } from './types/CustomerNumbersResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface CustomerNumbersController {
  listCustomerNumbers(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerNumbersResponse[]>
  createCustomerNumber(app: FastifyInstance, input: CustomerNumbersRequest, request?: FastifyRequest): Promise<CustomerNumbersResponse>
  getCustomerNumbersById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerNumbersResponse>
  updateCustomerNumber(app: FastifyInstance, input: CustomerNumbersRequest, request?: FastifyRequest): Promise<CustomerNumbersResponse>
  deleteCustomerNumber(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
