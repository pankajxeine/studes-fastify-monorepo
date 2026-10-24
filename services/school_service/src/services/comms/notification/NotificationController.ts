import type { NotificationRequest } from './types/NotificationRequest'
import type { NotificationUpdateRequest } from './types/NotificationUpdateRequest'
import type { NotificationResponse } from './types/NotificationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

export interface NotificationController {
  listNotification(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<NotificationResponse[]>>>
  createNotification(app: FastifyInstance, input: NotificationRequest, request?: FastifyRequest): Promise<NotificationResponse>
  getNotificationById(app: FastifyInstance, request?: FastifyRequest): Promise<NotificationResponse>
  updateNotification(app: FastifyInstance, input: NotificationUpdateRequest, request?: FastifyRequest): Promise<NotificationResponse>
  deleteNotification(app: FastifyInstance, request?: FastifyRequest): Promise<void>
}
