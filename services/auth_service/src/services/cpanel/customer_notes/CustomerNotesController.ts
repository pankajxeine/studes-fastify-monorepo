import type { CustomerNotesRequest } from './types/CustomerNotesRequest'
import type { CustomerNotesResponse } from './types/CustomerNotesResponse'
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

export interface CustomerNotesController {
  listCustomerNotes(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerNotesResponse[]>>>
  createCustomerNote(app: FastifyInstance, input: CustomerNotesRequest, request?: FastifyRequest): Promise<CustomerNotesResponse>
  getCustomerNotesById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerNotesResponse>
  updateCustomerNote(app: FastifyInstance, input: CustomerNotesRequest, request?: FastifyRequest): Promise<CustomerNotesResponse>
  deleteCustomerNote(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
