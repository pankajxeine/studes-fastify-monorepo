import type { TaxJurisdictionRequest } from './types/TaxJurisdictionRequest'
import type { TaxJurisdictionUpdateRequest } from './types/TaxJurisdictionUpdateRequest'
import type { TaxJurisdictionResponse } from './types/TaxJurisdictionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface TaxJurisdictionController {
  listTaxJurisdiction(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TaxJurisdictionResponse[]>>>
  createTaxJurisdiction(app: FastifyInstance, input: TaxJurisdictionRequest, request?: FastifyRequest): Promise<TaxJurisdictionResponse>
  getTaxJurisdictionById(app: FastifyInstance, request?: FastifyRequest): Promise<TaxJurisdictionResponse>
  updateTaxJurisdiction(app: FastifyInstance, input: TaxJurisdictionUpdateRequest, request?: FastifyRequest): Promise<TaxJurisdictionResponse>
  deleteTaxJurisdiction(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
