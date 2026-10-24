import type { RefundRequest } from './types/RefundRequest'
import type { RefundUpdateRequest } from './types/RefundUpdateRequest'
import type { RefundResponse } from './types/RefundResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface RefundController {
  listRefund(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<RefundResponse[]>>>
  createRefund(app: FastifyInstance, input: RefundRequest, request?: FastifyRequest): Promise<RefundResponse>
  getRefundById(app: FastifyInstance, request?: FastifyRequest): Promise<RefundResponse>
  updateRefund(app: FastifyInstance, input: RefundUpdateRequest, request?: FastifyRequest): Promise<RefundResponse>
  deleteRefund(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
