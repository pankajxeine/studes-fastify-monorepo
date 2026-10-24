import type { OutletRequest } from './types/OutletRequest'
import type { OutletUpdateRequest } from './types/OutletUpdateRequest'
import type { OutletResponse } from './types/OutletResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface OutletController {
  listOutlet(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<OutletResponse[]>>>
  createOutlet(app: FastifyInstance, input: OutletRequest, request?: FastifyRequest): Promise<OutletResponse>
  getOutletById(app: FastifyInstance, request?: FastifyRequest): Promise<OutletResponse>
  updateOutlet(app: FastifyInstance, input: OutletUpdateRequest, request?: FastifyRequest): Promise<OutletResponse>
  deleteOutlet(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
