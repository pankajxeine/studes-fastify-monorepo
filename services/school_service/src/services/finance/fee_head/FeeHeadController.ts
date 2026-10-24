import type { FeeHeadRequest } from './types/FeeHeadRequest'
import type { FeeHeadUpdateRequest } from './types/FeeHeadUpdateRequest'
import type { FeeHeadResponse } from './types/FeeHeadResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface FeeHeadController {
  listFeeHead(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FeeHeadResponse[]>>>
  createFeeHead(app: FastifyInstance, input: FeeHeadRequest, request?: FastifyRequest): Promise<FeeHeadResponse>
  getFeeHeadById(app: FastifyInstance, request?: FastifyRequest): Promise<FeeHeadResponse>
  updateFeeHead(app: FastifyInstance, input: FeeHeadUpdateRequest, request?: FastifyRequest): Promise<FeeHeadResponse>
  deleteFeeHead(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
