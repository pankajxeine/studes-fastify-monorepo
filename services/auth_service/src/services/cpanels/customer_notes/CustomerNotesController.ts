import type { CustomerNotesRequest } from './types/CustomerNotesRequest'
import type { CustomerNotesResponse } from './types/CustomerNotesResponse'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface CustomerNotesController {
  listCustomerNotes(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerNotesResponse[]>
  createCustomerNote(app: FastifyInstance, input: CustomerNotesRequest, request?: FastifyRequest): Promise<CustomerNotesResponse>
  getCustomerNotesById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerNotesResponse>
  updateCustomerNote(app: FastifyInstance, input: CustomerNotesRequest, request?: FastifyRequest): Promise<CustomerNotesResponse>
  deleteCustomerNote(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
