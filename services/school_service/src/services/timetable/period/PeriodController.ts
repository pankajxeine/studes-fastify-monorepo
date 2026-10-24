import type { PeriodRequest } from './types/PeriodRequest'
import type { PeriodUpdateRequest } from './types/PeriodUpdateRequest'
import type { PeriodResponse } from './types/PeriodResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PeriodController {
  listPeriod(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PeriodResponse[]>>>
  createPeriod(app: FastifyInstance, input: PeriodRequest, request?: FastifyRequest): Promise<PeriodResponse>
  getPeriodById(app: FastifyInstance, request?: FastifyRequest): Promise<PeriodResponse>
  updatePeriod(app: FastifyInstance, input: PeriodUpdateRequest, request?: FastifyRequest): Promise<PeriodResponse>
  deletePeriod(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
