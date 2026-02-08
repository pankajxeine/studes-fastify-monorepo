import type { Invoice } from '../types/Invoice'
import type { CreateInvoiceRequest } from '../types/CreateInvoiceRequest'
import type { Payment } from '../types/Payment'
import type { CreatePaymentRequest } from '../types/CreatePaymentRequest'
import type { InvoiceListResponse } from '../types/InvoiceListResponse'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface BillingController {
  listInvoices(headers?: RequestHeaders): Promise<InvoiceListResponse>
  createInvoice(input: CreateInvoiceRequest, headers?: RequestHeaders): Promise<Invoice>
  getInvoice(headers?: RequestHeaders): Promise<Invoice>
  createPayment(input: CreatePaymentRequest, headers?: RequestHeaders): Promise<Payment>
}
