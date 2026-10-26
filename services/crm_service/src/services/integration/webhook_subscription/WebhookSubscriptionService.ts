import type { WebhookSubscriptionRequest } from './types/WebhookSubscriptionRequest'
import type { WebhookSubscriptionUpdateRequest } from './types/WebhookSubscriptionUpdateRequest'
import type { WebhookSubscriptionResponse } from './types/WebhookSubscriptionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { WebhookSubscriptionController } from './WebhookSubscriptionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class WebhookSubscriptionService implements WebhookSubscriptionController {
      public async listWebhookSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<WebhookSubscriptionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_webhook_subscription.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<WebhookSubscriptionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createWebhookSubscription(app: FastifyInstance, input: WebhookSubscriptionRequest, request?: FastifyRequest): Promise<WebhookSubscriptionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_webhook_subscription.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<WebhookSubscriptionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getWebhookSubscriptionById(app: FastifyInstance, request?: FastifyRequest): Promise<WebhookSubscriptionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_webhook_subscription.schema(schema!);
      const { webhook_subscription_id } = (request?.params ?? {}) as { webhook_subscription_id?: string | number }
      if (webhook_subscription_id === undefined || webhook_subscription_id === '') throw httpError(400, 'webhook_subscription_id is required')
      const row = await model.findByPk(webhook_subscription_id)
      if (!row) {
        throw httpError(404, 'integration_webhook_subscription not found')
      }
      return toApiAttributes<WebhookSubscriptionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateWebhookSubscription(app: FastifyInstance, input: WebhookSubscriptionUpdateRequest, request?: FastifyRequest): Promise<WebhookSubscriptionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_webhook_subscription.schema(schema!);
      const { webhook_subscription_id } = (request?.params ?? {}) as { webhook_subscription_id?: string | number }
      if (webhook_subscription_id === undefined || webhook_subscription_id === '') throw httpError(400, 'webhook_subscription_id is required')
      const row = await model.findByPk(webhook_subscription_id)
      if (!row) {
        throw httpError(404, 'integration_webhook_subscription not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<WebhookSubscriptionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteWebhookSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_webhook_subscription.schema(schema!);
      const { webhook_subscription_id } = (request?.params ?? {}) as { webhook_subscription_id?: string | number }
      if (webhook_subscription_id === undefined || webhook_subscription_id === '') throw httpError(400, 'webhook_subscription_id is required')
      const deletedCount = await model.destroy({ where: { webhookSubscriptionId: webhook_subscription_id } })
      if (deletedCount === 0) throw httpError(404, 'integration_webhook_subscription not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
