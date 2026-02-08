import type { NotificationCreateRequest } from '../types/NotificationCreateRequest'
import type { Notification } from '../types/Notification'
import type { NotificationList } from '../types/NotificationList'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface NotificationsController {
  listNotifications(headers?: RequestHeaders): Promise<NotificationList>
  createNotification(input: NotificationCreateRequest, headers?: RequestHeaders): Promise<Notification>
}
