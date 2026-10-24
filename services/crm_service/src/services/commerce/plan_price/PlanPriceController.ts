import type { PlanPriceRequest } from './types/PlanPriceRequest'
import type { PlanPriceUpdateRequest } from './types/PlanPriceUpdateRequest'
import type { PlanPriceResponse } from './types/PlanPriceResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PlanPriceController {
  listPlanPrice(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlanPriceResponse[]>>>
  createPlanPrice(app: FastifyInstance, input: PlanPriceRequest, request?: FastifyRequest): Promise<PlanPriceResponse>
  getPlanPriceById(app: FastifyInstance, request?: FastifyRequest): Promise<PlanPriceResponse>
  updatePlanPrice(app: FastifyInstance, input: PlanPriceUpdateRequest, request?: FastifyRequest): Promise<PlanPriceResponse>
  deletePlanPrice(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
