import type { Invoice } from '../openapi/types/Invoice'
import type { CreateInvoiceRequest } from '../openapi/types/CreateInvoiceRequest'
import type { Payment } from '../openapi/types/Payment'
import type { CreatePaymentRequest } from '../openapi/types/CreatePaymentRequest'
import type { InvoiceListResponse } from '../openapi/types/InvoiceListResponse'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { BillingController } from '../openapi/controller/BillingController'

export class BillingService implements BillingController {
  public async listInvoices(headers?: RequestHeaders): Promise<InvoiceListResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async createInvoice(input: CreateInvoiceRequest, headers?: RequestHeaders): Promise<Invoice> {
    void input
    void headers
    throw new Error('Not implemented')
  }

  public async getInvoice(headers?: RequestHeaders): Promise<Invoice> {
    void headers
    throw new Error('Not implemented')
  }

  public async createPayment(input: CreatePaymentRequest, headers?: RequestHeaders): Promise<Payment> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
