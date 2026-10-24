import type { QuoteLineRequest } from './types/QuoteLineRequest'
import type { QuoteLineUpdateRequest } from './types/QuoteLineUpdateRequest'
import type { QuoteLineResponse } from './types/QuoteLineResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface QuoteLineController {
  listQuoteLine(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<QuoteLineResponse[]>>>
  createQuoteLine(app: FastifyInstance, input: QuoteLineRequest, request?: FastifyRequest): Promise<QuoteLineResponse>
  getQuoteLineById(app: FastifyInstance, request?: FastifyRequest): Promise<QuoteLineResponse>
  updateQuoteLine(app: FastifyInstance, input: QuoteLineUpdateRequest, request?: FastifyRequest): Promise<QuoteLineResponse>
  deleteQuoteLine(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
