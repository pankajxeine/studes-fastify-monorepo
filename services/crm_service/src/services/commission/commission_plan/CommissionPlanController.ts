import type { CommissionPlanRequest } from './types/CommissionPlanRequest'
import type { CommissionPlanUpdateRequest } from './types/CommissionPlanUpdateRequest'
import type { CommissionPlanResponse } from './types/CommissionPlanResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CommissionPlanController {
  listCommissionPlan(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CommissionPlanResponse[]>>>
  createCommissionPlan(app: FastifyInstance, input: CommissionPlanRequest, request?: FastifyRequest): Promise<CommissionPlanResponse>
  getCommissionPlanById(app: FastifyInstance, request?: FastifyRequest): Promise<CommissionPlanResponse>
  updateCommissionPlan(app: FastifyInstance, input: CommissionPlanUpdateRequest, request?: FastifyRequest): Promise<CommissionPlanResponse>
  deleteCommissionPlan(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
