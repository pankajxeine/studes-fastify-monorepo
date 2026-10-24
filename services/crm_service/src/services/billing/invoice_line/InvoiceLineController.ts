import type { InvoiceLineRequest } from './types/InvoiceLineRequest'
import type { InvoiceLineUpdateRequest } from './types/InvoiceLineUpdateRequest'
import type { InvoiceLineResponse } from './types/InvoiceLineResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface InvoiceLineController {
  listInvoiceLine(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InvoiceLineResponse[]>>>
  createInvoiceLine(app: FastifyInstance, input: InvoiceLineRequest, request?: FastifyRequest): Promise<InvoiceLineResponse>
  getInvoiceLineById(app: FastifyInstance, request?: FastifyRequest): Promise<InvoiceLineResponse>
  updateInvoiceLine(app: FastifyInstance, input: InvoiceLineUpdateRequest, request?: FastifyRequest): Promise<InvoiceLineResponse>
  deleteInvoiceLine(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
