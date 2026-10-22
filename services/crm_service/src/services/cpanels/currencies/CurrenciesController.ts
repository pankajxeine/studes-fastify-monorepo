import type { CurrenciesRequest } from './types/CurrenciesRequest'
import type { CurrenciesResponse } from './types/CurrenciesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface CurrenciesController {
  listCurrencies(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CurrenciesResponse[]>>>
  createCurrencie(app: FastifyInstance, input: CurrenciesRequest, request?: FastifyRequest): Promise<CurrenciesResponse>
  getCurrenciesById(app: FastifyInstance, request?: FastifyRequest): Promise<CurrenciesResponse>
  updateCurrencie(app: FastifyInstance, input: CurrenciesRequest, request?: FastifyRequest): Promise<CurrenciesResponse>
  deleteCurrencie(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
