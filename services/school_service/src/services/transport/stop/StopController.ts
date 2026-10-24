import type { StopRequest } from './types/StopRequest'
import type { StopUpdateRequest } from './types/StopUpdateRequest'
import type { StopResponse } from './types/StopResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface StopController {
  listStop(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<StopResponse[]>>>
  createStop(app: FastifyInstance, input: StopRequest, request?: FastifyRequest): Promise<StopResponse>
  getStopById(app: FastifyInstance, request?: FastifyRequest): Promise<StopResponse>
  updateStop(app: FastifyInstance, input: StopUpdateRequest, request?: FastifyRequest): Promise<StopResponse>
  deleteStop(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
