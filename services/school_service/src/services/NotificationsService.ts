import type { NotificationCreateRequest } from '../openapi/types/NotificationCreateRequest'
import type { Notification } from '../openapi/types/Notification'
import type { NotificationList } from '../openapi/types/NotificationList'
import type { RequestHeaders } from '../openapi/types/RequestHeaders'
import type { NotificationsController } from '../openapi/controller/NotificationsController'

export class NotificationsService implements NotificationsController {
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
