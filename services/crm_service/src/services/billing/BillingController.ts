import type { Invoice } from './types/Invoice'
import type { CreateInvoiceRequest } from './types/CreateInvoiceRequest'
import type { Payment } from './types/Payment'
import type { CreatePaymentRequest } from './types/CreatePaymentRequest'
import type { InvoiceListResponse } from './types/InvoiceListResponse'
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

export interface BillingController {
  listInvoices(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InvoiceListResponse>>>
  createInvoice(app: FastifyInstance, input: CreateInvoiceRequest, request?: FastifyRequest): Promise<Invoice>
  getInvoice(app: FastifyInstance, request?: FastifyRequest): Promise<Invoice>
  createPayment(app: FastifyInstance, input: CreatePaymentRequest, request?: FastifyRequest): Promise<Payment>
}
