import type { GatewayWebhookRequest } from './types/GatewayWebhookRequest'
import type { GatewayWebhookUpdateRequest } from './types/GatewayWebhookUpdateRequest'
import type { GatewayWebhookResponse } from './types/GatewayWebhookResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface GatewayWebhookController {
  listGatewayWebhook(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GatewayWebhookResponse[]>>>
  createGatewayWebhook(app: FastifyInstance, input: GatewayWebhookRequest, request?: FastifyRequest): Promise<GatewayWebhookResponse>
  getGatewayWebhookById(app: FastifyInstance, request?: FastifyRequest): Promise<GatewayWebhookResponse>
  updateGatewayWebhook(app: FastifyInstance, input: GatewayWebhookUpdateRequest, request?: FastifyRequest): Promise<GatewayWebhookResponse>
  deleteGatewayWebhook(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
