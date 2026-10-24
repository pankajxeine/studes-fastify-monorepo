import type { TaxRateRequest } from './types/TaxRateRequest'
import type { TaxRateUpdateRequest } from './types/TaxRateUpdateRequest'
import type { TaxRateResponse } from './types/TaxRateResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TaxRateController {
  listTaxRate(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TaxRateResponse[]>>>
  createTaxRate(app: FastifyInstance, input: TaxRateRequest, request?: FastifyRequest): Promise<TaxRateResponse>
  getTaxRateById(app: FastifyInstance, request?: FastifyRequest): Promise<TaxRateResponse>
  updateTaxRate(app: FastifyInstance, input: TaxRateUpdateRequest, request?: FastifyRequest): Promise<TaxRateResponse>
  deleteTaxRate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
