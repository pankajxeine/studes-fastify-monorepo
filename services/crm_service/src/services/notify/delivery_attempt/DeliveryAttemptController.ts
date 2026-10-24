import type { DeliveryAttemptRequest } from './types/DeliveryAttemptRequest'
import type { DeliveryAttemptUpdateRequest } from './types/DeliveryAttemptUpdateRequest'
import type { DeliveryAttemptResponse } from './types/DeliveryAttemptResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface DeliveryAttemptController {
  listDeliveryAttempt(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DeliveryAttemptResponse[]>>>
  createDeliveryAttempt(app: FastifyInstance, input: DeliveryAttemptRequest, request?: FastifyRequest): Promise<DeliveryAttemptResponse>
  getDeliveryAttemptById(app: FastifyInstance, request?: FastifyRequest): Promise<DeliveryAttemptResponse>
  updateDeliveryAttempt(app: FastifyInstance, input: DeliveryAttemptUpdateRequest, request?: FastifyRequest): Promise<DeliveryAttemptResponse>
  deleteDeliveryAttempt(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
