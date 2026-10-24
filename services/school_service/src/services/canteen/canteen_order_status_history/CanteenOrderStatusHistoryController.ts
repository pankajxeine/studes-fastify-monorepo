import type { CanteenOrderStatusHistoryRequest } from './types/CanteenOrderStatusHistoryRequest'
import type { CanteenOrderStatusHistoryUpdateRequest } from './types/CanteenOrderStatusHistoryUpdateRequest'
import type { CanteenOrderStatusHistoryResponse } from './types/CanteenOrderStatusHistoryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CanteenOrderStatusHistoryController {
  listCanteenOrderStatusHistory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CanteenOrderStatusHistoryResponse[]>>>
  createCanteenOrderStatusHistory(app: FastifyInstance, input: CanteenOrderStatusHistoryRequest, request?: FastifyRequest): Promise<CanteenOrderStatusHistoryResponse>
  getCanteenOrderStatusHistoryById(app: FastifyInstance, request?: FastifyRequest): Promise<CanteenOrderStatusHistoryResponse>
  updateCanteenOrderStatusHistory(app: FastifyInstance, input: CanteenOrderStatusHistoryUpdateRequest, request?: FastifyRequest): Promise<CanteenOrderStatusHistoryResponse>
  deleteCanteenOrderStatusHistory(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
