import type { CanteenOrderLineRequest } from './types/CanteenOrderLineRequest'
import type { CanteenOrderLineUpdateRequest } from './types/CanteenOrderLineUpdateRequest'
import type { CanteenOrderLineResponse } from './types/CanteenOrderLineResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CanteenOrderLineController {
  listCanteenOrderLine(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CanteenOrderLineResponse[]>>>
  createCanteenOrderLine(app: FastifyInstance, input: CanteenOrderLineRequest, request?: FastifyRequest): Promise<CanteenOrderLineResponse>
  getCanteenOrderLineById(app: FastifyInstance, request?: FastifyRequest): Promise<CanteenOrderLineResponse>
  updateCanteenOrderLine(app: FastifyInstance, input: CanteenOrderLineUpdateRequest, request?: FastifyRequest): Promise<CanteenOrderLineResponse>
  deleteCanteenOrderLine(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
