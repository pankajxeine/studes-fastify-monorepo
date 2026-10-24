import type { PlanAddonRequest } from './types/PlanAddonRequest'
import type { PlanAddonUpdateRequest } from './types/PlanAddonUpdateRequest'
import type { PlanAddonResponse } from './types/PlanAddonResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PlanAddonController {
  listPlanAddon(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlanAddonResponse[]>>>
  createPlanAddon(app: FastifyInstance, input: PlanAddonRequest, request?: FastifyRequest): Promise<PlanAddonResponse>
  getPlanAddonById(app: FastifyInstance, request?: FastifyRequest): Promise<PlanAddonResponse>
  updatePlanAddon(app: FastifyInstance, input: PlanAddonUpdateRequest, request?: FastifyRequest): Promise<PlanAddonResponse>
  deletePlanAddon(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
