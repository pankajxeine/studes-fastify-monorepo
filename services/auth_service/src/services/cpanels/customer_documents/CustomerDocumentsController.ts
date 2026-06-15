import type { CustomerDocumentsRequest } from './types/CustomerDocumentsRequest'
import type { CustomerDocumentsResponse } from './types/CustomerDocumentsResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface CustomerDocumentsController {
  listCustomerDocuments(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDocumentsResponse[]>
  createCustomerDocument(app: FastifyInstance, input: CustomerDocumentsRequest, request?: FastifyRequest): Promise<CustomerDocumentsResponse>
  getCustomerDocumentsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDocumentsResponse>
  updateCustomerDocument(app: FastifyInstance, input: CustomerDocumentsRequest, request?: FastifyRequest): Promise<CustomerDocumentsResponse>
  deleteCustomerDocument(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
