import type { HealthResponse } from '../types/HealthResponse'
import type { HealthDbResponse } from '../types/HealthDbResponse'
import type { InvoiceCreateRequest } from '../types/InvoiceCreateRequest'
import type { Invoice } from '../types/Invoice'
import type { InvoiceList } from '../types/InvoiceList'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface BillingServiceController {
  billingHealth(headers?: RequestHeaders): Promise<HealthResponse>
  billingHealthDb(headers?: RequestHeaders): Promise<HealthDbResponse>
  listInvoices(headers?: RequestHeaders): Promise<InvoiceList>
  createInvoice(input: InvoiceCreateRequest, headers?: RequestHeaders): Promise<Invoice>
}
