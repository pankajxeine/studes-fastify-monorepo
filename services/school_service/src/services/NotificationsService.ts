import type { NotificationCreateRequest } from '../openapi/types/NotificationCreateRequest'
import type { Notification } from '../openapi/types/Notification'
import type { NotificationList } from '../openapi/types/NotificationList'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { NotificationsController } from '../openapi/controller/NotificationsController'

export class NotificationsService implements NotificationsController {
  public async listNotifications(app: FastifyInstance,request?: FastifyRequest): Promise<NotificationList> {
    void request
    throw new Error('Not implemented')
  }

  public async createNotification(app: FastifyInstance, input: NotificationCreateRequest, request?: FastifyRequest): Promise<Notification> {
    void input
    void request
    throw new Error('Not implemented')
  }
}
