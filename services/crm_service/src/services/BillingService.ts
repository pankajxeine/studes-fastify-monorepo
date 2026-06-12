import type { Invoice } from '../openapi/types/Invoice'
import type { CreateInvoiceRequest } from '../openapi/types/CreateInvoiceRequest'
import type { Payment } from '../openapi/types/Payment'
import type { CreatePaymentRequest } from '../openapi/types/CreatePaymentRequest'
import type { InvoiceListResponse } from '../openapi/types/InvoiceListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { BillingController } from '../openapi/controller/BillingController'

export class BillingService implements BillingController {
  public async listInvoices(app: FastifyInstance,request?: FastifyRequest): Promise<InvoiceListResponse> {
    void request
    throw new Error('Not implemented')
  }

  public async createInvoice(app: FastifyInstance, input: CreateInvoiceRequest, request?: FastifyRequest): Promise<Invoice> {
    void input
    void request
    throw new Error('Not implemented')
  }

  public async getInvoice(app: FastifyInstance,request?: FastifyRequest): Promise<Invoice> {
    void request
    throw new Error('Not implemented')
  }

  public async createPayment(app: FastifyInstance, input: CreatePaymentRequest, request?: FastifyRequest): Promise<Payment> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
