import type { OutpassRequest } from './types/OutpassRequest'
import type { OutpassUpdateRequest } from './types/OutpassUpdateRequest'
import type { OutpassResponse } from './types/OutpassResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface OutpassController {
  listOutpass(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<OutpassResponse[]>>>
  createOutpass(app: FastifyInstance, input: OutpassRequest, request?: FastifyRequest): Promise<OutpassResponse>
  getOutpassById(app: FastifyInstance, request?: FastifyRequest): Promise<OutpassResponse>
  updateOutpass(app: FastifyInstance, input: OutpassUpdateRequest, request?: FastifyRequest): Promise<OutpassResponse>
  deleteOutpass(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
