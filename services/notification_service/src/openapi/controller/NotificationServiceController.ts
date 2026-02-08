import type { HealthResponse } from '../types/HealthResponse'
import type { HealthDbResponse } from '../types/HealthDbResponse'
import type { NotificationCreateRequest } from '../types/NotificationCreateRequest'
import type { Notification } from '../types/Notification'
import type { NotificationList } from '../types/NotificationList'
import type { RequestHeaders } from '../types/RequestHeaders'

export interface NotificationServiceController {
  notificationHealth(headers?: RequestHeaders): Promise<HealthResponse>
  notificationHealthDb(headers?: RequestHeaders): Promise<HealthDbResponse>
  listNotifications(headers?: RequestHeaders): Promise<NotificationList>
  createNotification(input: NotificationCreateRequest, headers?: RequestHeaders): Promise<Notification>
}
