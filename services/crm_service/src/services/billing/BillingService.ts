import type { Invoice } from './types/Invoice'
import type { CreateInvoiceRequest } from './types/CreateInvoiceRequest'
import type { Payment } from './types/Payment'
import type { CreatePaymentRequest } from './types/CreatePaymentRequest'
import type { InvoiceListResponse } from './types/InvoiceListResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { BillingController, ListItem, PaginatedResponse } from './BillingController'

export class BillingService implements BillingController {
      public async listInvoices(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InvoiceListResponse>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createInvoice(app: FastifyInstance, input: CreateInvoiceRequest, request?: FastifyRequest): Promise<Invoice> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getInvoice(app: FastifyInstance, request?: FastifyRequest): Promise<Invoice> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createPayment(app: FastifyInstance, input: CreatePaymentRequest, request?: FastifyRequest): Promise<Payment> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
