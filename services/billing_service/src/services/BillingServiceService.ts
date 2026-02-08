import type { HealthResponse } from '../openapi/types/HealthResponse'
import type { HealthDbResponse } from '../openapi/types/HealthDbResponse'
import type { InvoiceCreateRequest } from '../openapi/types/InvoiceCreateRequest'
import type { Invoice } from '../openapi/types/Invoice'
import type { InvoiceList } from '../openapi/types/InvoiceList'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { BillingServiceController } from '../openapi/controller/BillingServiceController'

export class BillingServiceService implements BillingServiceController {
  public async billingHealth(headers?: RequestHeaders): Promise<HealthResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async billingHealthDb(headers?: RequestHeaders): Promise<HealthDbResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async listInvoices(headers?: RequestHeaders): Promise<InvoiceList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createInvoice(input: InvoiceCreateRequest, headers?: RequestHeaders): Promise<Invoice> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
