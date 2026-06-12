import type { HealthResponse } from '../openapi/types/HealthResponse'
import type { HealthDbResponse } from '../openapi/types/HealthDbResponse'
import type { NotificationCreateRequest } from '../openapi/types/NotificationCreateRequest'
import type { Notification } from '../openapi/types/Notification'
import type { NotificationList } from '../openapi/types/NotificationList'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { NotificationServiceController } from '../openapi/controller/NotificationServiceController'

export class NotificationServiceService implements NotificationServiceController {
  public async notificationHealth(app: FastifyInstance,request?: FastifyRequest): Promise<HealthResponse> {
    void request
    throw new Error('Not implemented')
  }

  public async notificationHealthDb(app: FastifyInstance,request?: FastifyRequest): Promise<HealthDbResponse> {
    void request
    throw new Error('Not implemented')
  }

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
