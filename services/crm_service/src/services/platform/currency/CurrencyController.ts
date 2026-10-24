import type { CurrencyRequest } from './types/CurrencyRequest'
import type { CurrencyUpdateRequest } from './types/CurrencyUpdateRequest'
import type { CurrencyResponse } from './types/CurrencyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CurrencyController {
  listCurrency(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CurrencyResponse[]>>>
  createCurrency(app: FastifyInstance, input: CurrencyRequest, request?: FastifyRequest): Promise<CurrencyResponse>
  getCurrencyById(app: FastifyInstance, request?: FastifyRequest): Promise<CurrencyResponse>
  updateCurrency(app: FastifyInstance, input: CurrencyUpdateRequest, request?: FastifyRequest): Promise<CurrencyResponse>
  deleteCurrency(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
