import type { CanteenOrderRequest } from './types/CanteenOrderRequest'
import type { CanteenOrderUpdateRequest } from './types/CanteenOrderUpdateRequest'
import type { CanteenOrderResponse } from './types/CanteenOrderResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CanteenOrderController {
  listCanteenOrder(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CanteenOrderResponse[]>>>
  createCanteenOrder(app: FastifyInstance, input: CanteenOrderRequest, request?: FastifyRequest): Promise<CanteenOrderResponse>
  getCanteenOrderById(app: FastifyInstance, request?: FastifyRequest): Promise<CanteenOrderResponse>
  updateCanteenOrder(app: FastifyInstance, input: CanteenOrderUpdateRequest, request?: FastifyRequest): Promise<CanteenOrderResponse>
  deleteCanteenOrder(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
