import type { HealthResponse } from '../types/HealthResponse'
import type { HealthDbResponse } from '../types/HealthDbResponse'
import type { NotificationCreateRequest } from '../types/NotificationCreateRequest'
import type { Notification } from '../types/Notification'
import type { NotificationList } from '../types/NotificationList'
import { FastifyInstance, FastifyRequest} from 'fastify'

export interface NotificationServiceController {
  notificationHealth(app: FastifyInstance, request?: FastifyRequest): Promise<HealthResponse>
  notificationHealthDb(app: FastifyInstance, request?: FastifyRequest): Promise<HealthDbResponse>
  listNotifications(app: FastifyInstance, request?: FastifyRequest): Promise<NotificationList>
  createNotification(app: FastifyInstance, input: NotificationCreateRequest, request?: FastifyRequest): Promise<Notification>
}
