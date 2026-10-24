import type { PlanItemRequest } from './types/PlanItemRequest'
import type { PlanItemUpdateRequest } from './types/PlanItemUpdateRequest'
import type { PlanItemResponse } from './types/PlanItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PlanItemController {
  listPlanItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlanItemResponse[]>>>
  createPlanItem(app: FastifyInstance, input: PlanItemRequest, request?: FastifyRequest): Promise<PlanItemResponse>
  getPlanItemById(app: FastifyInstance, request?: FastifyRequest): Promise<PlanItemResponse>
  updatePlanItem(app: FastifyInstance, input: PlanItemUpdateRequest, request?: FastifyRequest): Promise<PlanItemResponse>
  deletePlanItem(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
