import type { PlanRequest } from './types/PlanRequest'
import type { PlanUpdateRequest } from './types/PlanUpdateRequest'
import type { PlanResponse } from './types/PlanResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PlanController {
  listPlan(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlanResponse[]>>>
  createPlan(app: FastifyInstance, input: PlanRequest, request?: FastifyRequest): Promise<PlanResponse>
  getPlanById(app: FastifyInstance, request?: FastifyRequest): Promise<PlanResponse>
  updatePlan(app: FastifyInstance, input: PlanUpdateRequest, request?: FastifyRequest): Promise<PlanResponse>
  deletePlan(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
