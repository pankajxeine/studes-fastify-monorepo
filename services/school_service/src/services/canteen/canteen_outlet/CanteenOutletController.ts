import type { CanteenOutletRequest } from './types/CanteenOutletRequest'
import type { CanteenOutletUpdateRequest } from './types/CanteenOutletUpdateRequest'
import type { CanteenOutletResponse } from './types/CanteenOutletResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface CanteenOutletController {
  listCanteenOutlet(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CanteenOutletResponse[]>>>
  createCanteenOutlet(app: FastifyInstance, input: CanteenOutletRequest, request?: FastifyRequest): Promise<CanteenOutletResponse>
  getCanteenOutletById(app: FastifyInstance, request?: FastifyRequest): Promise<CanteenOutletResponse>
  updateCanteenOutlet(app: FastifyInstance, input: CanteenOutletUpdateRequest, request?: FastifyRequest): Promise<CanteenOutletResponse>
  deleteCanteenOutlet(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
