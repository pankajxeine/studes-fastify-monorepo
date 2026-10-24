import type { PayoutRequest } from './types/PayoutRequest'
import type { PayoutUpdateRequest } from './types/PayoutUpdateRequest'
import type { PayoutResponse } from './types/PayoutResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface PayoutController {
  listPayout(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PayoutResponse[]>>>
  createPayout(app: FastifyInstance, input: PayoutRequest, request?: FastifyRequest): Promise<PayoutResponse>
  getPayoutById(app: FastifyInstance, request?: FastifyRequest): Promise<PayoutResponse>
  updatePayout(app: FastifyInstance, input: PayoutUpdateRequest, request?: FastifyRequest): Promise<PayoutResponse>
  deletePayout(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
