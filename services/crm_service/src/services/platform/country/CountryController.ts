import type { CountryRequest } from './types/CountryRequest'
import type { CountryUpdateRequest } from './types/CountryUpdateRequest'
import type { CountryResponse } from './types/CountryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CountryController {
  listCountry(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CountryResponse[]>>>
  createCountry(app: FastifyInstance, input: CountryRequest, request?: FastifyRequest): Promise<CountryResponse>
  getCountryById(app: FastifyInstance, request?: FastifyRequest): Promise<CountryResponse>
  updateCountry(app: FastifyInstance, input: CountryUpdateRequest, request?: FastifyRequest): Promise<CountryResponse>
  deleteCountry(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
