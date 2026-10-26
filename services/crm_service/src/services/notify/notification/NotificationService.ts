import type { NotificationRequest } from './types/NotificationRequest'
import type { NotificationUpdateRequest } from './types/NotificationUpdateRequest'
import type { NotificationResponse } from './types/NotificationResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { NotificationController } from './NotificationController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class NotificationService implements NotificationController {
      public async listNotification(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<NotificationResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_notification.schema(schema!);
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await model.findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => toApiAttributes<ListItem<NotificationResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
        pagination: {
          page,
          limit,
          total: count,
          totalPages: Math.ceil(count / limit),
        },
      }
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async createNotification(app: FastifyInstance, input: NotificationRequest, request?: FastifyRequest): Promise<NotificationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_notification.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<NotificationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getNotificationById(app: FastifyInstance, request?: FastifyRequest): Promise<NotificationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_notification.schema(schema!);
      const { notification_id } = (request?.params ?? {}) as { notification_id?: string | number }
      if (notification_id === undefined || notification_id === '') throw httpError(400, 'notification_id is required')
      const row = await model.findByPk(notification_id)
      if (!row) {
        throw httpError(404, 'notify_notification not found')
      }
      return toApiAttributes<NotificationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateNotification(app: FastifyInstance, input: NotificationUpdateRequest, request?: FastifyRequest): Promise<NotificationResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_notification.schema(schema!);
      const { notification_id } = (request?.params ?? {}) as { notification_id?: string | number }
      if (notification_id === undefined || notification_id === '') throw httpError(400, 'notification_id is required')
      const row = await model.findByPk(notification_id)
      if (!row) {
        throw httpError(404, 'notify_notification not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<NotificationResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteNotification(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_notification.schema(schema!);
      const { notification_id } = (request?.params ?? {}) as { notification_id?: string | number }
      if (notification_id === undefined || notification_id === '') throw httpError(400, 'notification_id is required')
      const deletedCount = await model.destroy({ where: { notificationId: notification_id } })
      if (deletedCount === 0) throw httpError(404, 'notify_notification not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
