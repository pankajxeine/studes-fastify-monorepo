import type { CustomerDiscountsRequest } from './types/CustomerDiscountsRequest'
import type { CustomerDiscountsResponse } from './types/CustomerDiscountsResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface CustomerDiscountsController {
  listCustomerDiscounts(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDiscountsResponse[]>
  createCustomerDiscount(app: FastifyInstance, input: CustomerDiscountsRequest, request?: FastifyRequest): Promise<CustomerDiscountsResponse>
  getCustomerDiscountsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDiscountsResponse>
  updateCustomerDiscount(app: FastifyInstance, input: CustomerDiscountsRequest, request?: FastifyRequest): Promise<CustomerDiscountsResponse>
  deleteCustomerDiscount(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
