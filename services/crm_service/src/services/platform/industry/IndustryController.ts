import type { IndustryRequest } from './types/IndustryRequest'
import type { IndustryUpdateRequest } from './types/IndustryUpdateRequest'
import type { IndustryResponse } from './types/IndustryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface IndustryController {
  listIndustry(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IndustryResponse[]>>>
  createIndustry(app: FastifyInstance, input: IndustryRequest, request?: FastifyRequest): Promise<IndustryResponse>
  getIndustryById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryResponse>
  updateIndustry(app: FastifyInstance, input: IndustryUpdateRequest, request?: FastifyRequest): Promise<IndustryResponse>
  deleteIndustry(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
