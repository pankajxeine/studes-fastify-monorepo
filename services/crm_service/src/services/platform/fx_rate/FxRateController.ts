import type { FxRateRequest } from './types/FxRateRequest'
import type { FxRateUpdateRequest } from './types/FxRateUpdateRequest'
import type { FxRateResponse } from './types/FxRateResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface FxRateController {
  listFxRate(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FxRateResponse[]>>>
  createFxRate(app: FastifyInstance, input: FxRateRequest, request?: FastifyRequest): Promise<FxRateResponse>
  getFxRateById(app: FastifyInstance, request?: FastifyRequest): Promise<FxRateResponse>
  updateFxRate(app: FastifyInstance, input: FxRateUpdateRequest, request?: FastifyRequest): Promise<FxRateResponse>
  deleteFxRate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
