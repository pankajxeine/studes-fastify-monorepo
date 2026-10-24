import type { WebhookDeliveryRequest } from './types/WebhookDeliveryRequest'
import type { WebhookDeliveryUpdateRequest } from './types/WebhookDeliveryUpdateRequest'
import type { WebhookDeliveryResponse } from './types/WebhookDeliveryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface WebhookDeliveryController {
  listWebhookDelivery(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<WebhookDeliveryResponse[]>>>
  createWebhookDelivery(app: FastifyInstance, input: WebhookDeliveryRequest, request?: FastifyRequest): Promise<WebhookDeliveryResponse>
  getWebhookDeliveryById(app: FastifyInstance, request?: FastifyRequest): Promise<WebhookDeliveryResponse>
  updateWebhookDelivery(app: FastifyInstance, input: WebhookDeliveryUpdateRequest, request?: FastifyRequest): Promise<WebhookDeliveryResponse>
  deleteWebhookDelivery(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
