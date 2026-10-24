import type { InvoiceRequest } from './types/InvoiceRequest'
import type { InvoiceUpdateRequest } from './types/InvoiceUpdateRequest'
import type { InvoiceResponse } from './types/InvoiceResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface InvoiceController {
  listInvoice(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InvoiceResponse[]>>>
  createInvoice(app: FastifyInstance, input: InvoiceRequest, request?: FastifyRequest): Promise<InvoiceResponse>
  getInvoiceById(app: FastifyInstance, request?: FastifyRequest): Promise<InvoiceResponse>
  updateInvoice(app: FastifyInstance, input: InvoiceUpdateRequest, request?: FastifyRequest): Promise<InvoiceResponse>
  deleteInvoice(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
