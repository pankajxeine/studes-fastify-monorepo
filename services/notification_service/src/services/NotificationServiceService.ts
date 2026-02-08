import type { HealthResponse } from '../openapi/types/HealthResponse'
import type { HealthDbResponse } from '../openapi/types/HealthDbResponse'
import type { NotificationCreateRequest } from '../openapi/types/NotificationCreateRequest'
import type { Notification } from '../openapi/types/Notification'
import type { NotificationList } from '../openapi/types/NotificationList'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { NotificationServiceController } from '../openapi/controller/NotificationServiceController'

export class NotificationServiceService implements NotificationServiceController {
  public async notificationHealth(headers?: RequestHeaders): Promise<HealthResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async notificationHealthDb(headers?: RequestHeaders): Promise<HealthDbResponse> {
    void headers
    throw new Error('Not implemented')
  }

  public async listNotifications(headers?: RequestHeaders): Promise<NotificationList> {
    void headers
    throw new Error('Not implemented')
  }

  public async createNotification(input: NotificationCreateRequest, headers?: RequestHeaders): Promise<Notification> {
    void input
    void headers
    throw new Error('Not implemented')
  }
}
