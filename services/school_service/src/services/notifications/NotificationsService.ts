import type { NotificationCreateRequest } from './types/NotificationCreateRequest'
import type { Notification } from './types/Notification'
import type { NotificationList } from './types/NotificationList'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { NotificationsController, ListItem, PaginatedResponse } from './NotificationsController'

export class NotificationsService implements NotificationsController {
      public async listNotifications(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<NotificationList>>> {
    try {
      // TODO: implement logic using app + request

      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createNotification(app: FastifyInstance, input: NotificationCreateRequest, request?: FastifyRequest): Promise<Notification> {
    try {
      // TODO: implement logic using app + input
      void input;
      void request;
      throw new Error('Not implemented');
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
