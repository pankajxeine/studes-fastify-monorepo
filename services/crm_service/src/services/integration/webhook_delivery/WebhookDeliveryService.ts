import type { WebhookDeliveryRequest } from './types/WebhookDeliveryRequest'
import type { WebhookDeliveryUpdateRequest } from './types/WebhookDeliveryUpdateRequest'
import type { WebhookDeliveryResponse } from './types/WebhookDeliveryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { WebhookDeliveryController } from './WebhookDeliveryController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class WebhookDeliveryService implements WebhookDeliveryController {
      public async listWebhookDelivery(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<WebhookDeliveryResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_webhook_delivery.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<WebhookDeliveryResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createWebhookDelivery(app: FastifyInstance, input: WebhookDeliveryRequest, request?: FastifyRequest): Promise<WebhookDeliveryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_webhook_delivery.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<WebhookDeliveryResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getWebhookDeliveryById(app: FastifyInstance, request?: FastifyRequest): Promise<WebhookDeliveryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_webhook_delivery.schema(schema!);
      const { webhook_delivery_id } = (request?.params ?? {}) as { webhook_delivery_id?: string | number }
      if (webhook_delivery_id === undefined || webhook_delivery_id === '') throw httpError(400, 'webhook_delivery_id is required')
      const row = await model.findByPk(webhook_delivery_id)
      if (!row) {
        throw httpError(404, 'integration_webhook_delivery not found')
      }
      return toApiAttributes<WebhookDeliveryResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateWebhookDelivery(app: FastifyInstance, input: WebhookDeliveryUpdateRequest, request?: FastifyRequest): Promise<WebhookDeliveryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_webhook_delivery.schema(schema!);
      const { webhook_delivery_id } = (request?.params ?? {}) as { webhook_delivery_id?: string | number }
      if (webhook_delivery_id === undefined || webhook_delivery_id === '') throw httpError(400, 'webhook_delivery_id is required')
      const row = await model.findByPk(webhook_delivery_id)
      if (!row) {
        throw httpError(404, 'integration_webhook_delivery not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<WebhookDeliveryResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteWebhookDelivery(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.integration_webhook_delivery.schema(schema!);
      const { webhook_delivery_id } = (request?.params ?? {}) as { webhook_delivery_id?: string | number }
      if (webhook_delivery_id === undefined || webhook_delivery_id === '') throw httpError(400, 'webhook_delivery_id is required')
      const deletedCount = await model.destroy({ where: { webhookDeliveryId: webhook_delivery_id } })
      if (deletedCount === 0) throw httpError(404, 'integration_webhook_delivery not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
