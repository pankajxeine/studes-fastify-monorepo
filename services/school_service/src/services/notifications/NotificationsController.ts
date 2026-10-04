import type { NotificationCreateRequest } from './types/NotificationCreateRequest'
import type { Notification } from './types/Notification'
import type { NotificationList } from './types/NotificationList'
import { FastifyInstance, FastifyRequest } from 'fastify'

export type ListItem<T> = T extends (infer Item)[] ? Item : T

export interface PaginatedResponse<T> {
  data: T[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
  }
}

export interface NotificationsController {
  listNotifications(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<NotificationList>>>
  createNotification(app: FastifyInstance, input: NotificationCreateRequest, request?: FastifyRequest): Promise<Notification>
}
