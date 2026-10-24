import type { WebhookSubscriptionRequest } from './types/WebhookSubscriptionRequest'
import type { WebhookSubscriptionUpdateRequest } from './types/WebhookSubscriptionUpdateRequest'
import type { WebhookSubscriptionResponse } from './types/WebhookSubscriptionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface WebhookSubscriptionController {
  listWebhookSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<WebhookSubscriptionResponse[]>>>
  createWebhookSubscription(app: FastifyInstance, input: WebhookSubscriptionRequest, request?: FastifyRequest): Promise<WebhookSubscriptionResponse>
  getWebhookSubscriptionById(app: FastifyInstance, request?: FastifyRequest): Promise<WebhookSubscriptionResponse>
  updateWebhookSubscription(app: FastifyInstance, input: WebhookSubscriptionUpdateRequest, request?: FastifyRequest): Promise<WebhookSubscriptionResponse>
  deleteWebhookSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
