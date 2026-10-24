import type { PlanVersionRequest } from './types/PlanVersionRequest'
import type { PlanVersionUpdateRequest } from './types/PlanVersionUpdateRequest'
import type { PlanVersionResponse } from './types/PlanVersionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PlanVersionController {
  listPlanVersion(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlanVersionResponse[]>>>
  createPlanVersion(app: FastifyInstance, input: PlanVersionRequest, request?: FastifyRequest): Promise<PlanVersionResponse>
  getPlanVersionById(app: FastifyInstance, request?: FastifyRequest): Promise<PlanVersionResponse>
  updatePlanVersion(app: FastifyInstance, input: PlanVersionUpdateRequest, request?: FastifyRequest): Promise<PlanVersionResponse>
  deletePlanVersion(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
