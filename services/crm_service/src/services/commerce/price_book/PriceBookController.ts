import type { PriceBookRequest } from './types/PriceBookRequest'
import type { PriceBookUpdateRequest } from './types/PriceBookUpdateRequest'
import type { PriceBookResponse } from './types/PriceBookResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PriceBookController {
  listPriceBook(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PriceBookResponse[]>>>
  createPriceBook(app: FastifyInstance, input: PriceBookRequest, request?: FastifyRequest): Promise<PriceBookResponse>
  getPriceBookById(app: FastifyInstance, request?: FastifyRequest): Promise<PriceBookResponse>
  updatePriceBook(app: FastifyInstance, input: PriceBookUpdateRequest, request?: FastifyRequest): Promise<PriceBookResponse>
  deletePriceBook(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
