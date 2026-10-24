import type { NotificationTemplateRequest } from './types/NotificationTemplateRequest'
import type { NotificationTemplateUpdateRequest } from './types/NotificationTemplateUpdateRequest'
import type { NotificationTemplateResponse } from './types/NotificationTemplateResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface NotificationTemplateController {
  listNotificationTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<NotificationTemplateResponse[]>>>
  createNotificationTemplate(app: FastifyInstance, input: NotificationTemplateRequest, request?: FastifyRequest): Promise<NotificationTemplateResponse>
  getNotificationTemplateById(app: FastifyInstance, request?: FastifyRequest): Promise<NotificationTemplateResponse>
  updateNotificationTemplate(app: FastifyInstance, input: NotificationTemplateUpdateRequest, request?: FastifyRequest): Promise<NotificationTemplateResponse>
  deleteNotificationTemplate(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
