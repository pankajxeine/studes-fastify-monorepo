import type { CountriesRequest } from './types/CountriesRequest'
import type { CountriesResponse } from './types/CountriesResponse'
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

export interface CountriesController {
  listCountries(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CountriesResponse[]>>>
  createCountrie(app: FastifyInstance, input: CountriesRequest, request?: FastifyRequest): Promise<CountriesResponse>
  getCountriesById(app: FastifyInstance, request?: FastifyRequest): Promise<CountriesResponse>
  updateCountrie(app: FastifyInstance, input: CountriesRequest, request?: FastifyRequest): Promise<CountriesResponse>
  deleteCountrie(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
