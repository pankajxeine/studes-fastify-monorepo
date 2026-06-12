import type { NotificationCreateRequest } from '../types/NotificationCreateRequest'
import type { Notification } from '../types/Notification'
import type { NotificationList } from '../types/NotificationList'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface NotificationsController {
  listNotifications(app: FastifyInstance, request?: FastifyRequest): Promise<NotificationList>
  createNotification(app: FastifyInstance, input: NotificationCreateRequest, request?: FastifyRequest): Promise<Notification>
}
