import type { QueueRequest } from './types/QueueRequest'
import type { QueueUpdateRequest } from './types/QueueUpdateRequest'
import type { QueueResponse } from './types/QueueResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface QueueController {
  listQueue(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<QueueResponse[]>>>
  createQueue(app: FastifyInstance, input: QueueRequest, request?: FastifyRequest): Promise<QueueResponse>
  getQueueById(app: FastifyInstance, request?: FastifyRequest): Promise<QueueResponse>
  updateQueue(app: FastifyInstance, input: QueueUpdateRequest, request?: FastifyRequest): Promise<QueueResponse>
  deleteQueue(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
