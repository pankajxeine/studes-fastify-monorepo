import type { CustomerStatusRequest } from './types/CustomerStatusRequest'
import type { CustomerStatusResponse } from './types/CustomerStatusResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface CustomerStatusController {
  listCustomerStatus(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusResponse[]>
  createCustomerStatu(app: FastifyInstance, input: CustomerStatusRequest, request?: FastifyRequest): Promise<CustomerStatusResponse>
  getCustomerStatusById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusResponse>
  updateCustomerStatu(app: FastifyInstance, input: CustomerStatusRequest, request?: FastifyRequest): Promise<CustomerStatusResponse>
  deleteCustomerStatu(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
