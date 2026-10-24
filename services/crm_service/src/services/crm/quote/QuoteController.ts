import type { QuoteRequest } from './types/QuoteRequest'
import type { QuoteUpdateRequest } from './types/QuoteUpdateRequest'
import type { QuoteResponse } from './types/QuoteResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface QuoteController {
  listQuote(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<QuoteResponse[]>>>
  createQuote(app: FastifyInstance, input: QuoteRequest, request?: FastifyRequest): Promise<QuoteResponse>
  getQuoteById(app: FastifyInstance, request?: FastifyRequest): Promise<QuoteResponse>
  updateQuote(app: FastifyInstance, input: QuoteUpdateRequest, request?: FastifyRequest): Promise<QuoteResponse>
  deleteQuote(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
