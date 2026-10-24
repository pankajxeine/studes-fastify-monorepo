import type { GradingSchemeBandRequest } from './types/GradingSchemeBandRequest'
import type { GradingSchemeBandUpdateRequest } from './types/GradingSchemeBandUpdateRequest'
import type { GradingSchemeBandResponse } from './types/GradingSchemeBandResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface GradingSchemeBandController {
  listGradingSchemeBand(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GradingSchemeBandResponse[]>>>
  createGradingSchemeBand(app: FastifyInstance, input: GradingSchemeBandRequest, request?: FastifyRequest): Promise<GradingSchemeBandResponse>
  getGradingSchemeBandById(app: FastifyInstance, request?: FastifyRequest): Promise<GradingSchemeBandResponse>
  updateGradingSchemeBand(app: FastifyInstance, input: GradingSchemeBandUpdateRequest, request?: FastifyRequest): Promise<GradingSchemeBandResponse>
  deleteGradingSchemeBand(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
