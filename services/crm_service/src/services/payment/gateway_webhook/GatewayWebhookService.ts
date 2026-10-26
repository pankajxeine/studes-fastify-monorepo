import type { GatewayWebhookRequest } from './types/GatewayWebhookRequest'
import type { GatewayWebhookUpdateRequest } from './types/GatewayWebhookUpdateRequest'
import type { GatewayWebhookResponse } from './types/GatewayWebhookResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { GatewayWebhookController } from './GatewayWebhookController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class GatewayWebhookService implements GatewayWebhookController {
      public async listGatewayWebhook(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<GatewayWebhookResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_gateway_webhook.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<GatewayWebhookResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createGatewayWebhook(app: FastifyInstance, input: GatewayWebhookRequest, request?: FastifyRequest): Promise<GatewayWebhookResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_gateway_webhook.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<GatewayWebhookResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getGatewayWebhookById(app: FastifyInstance, request?: FastifyRequest): Promise<GatewayWebhookResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_gateway_webhook.schema(schema!);
      const { gateway_webhook_id } = (request?.params ?? {}) as { gateway_webhook_id?: string | number }
      if (gateway_webhook_id === undefined || gateway_webhook_id === '') throw httpError(400, 'gateway_webhook_id is required')
      const row = await model.findByPk(gateway_webhook_id)
      if (!row) {
        throw httpError(404, 'payment_gateway_webhook not found')
      }
      return toApiAttributes<GatewayWebhookResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateGatewayWebhook(app: FastifyInstance, input: GatewayWebhookUpdateRequest, request?: FastifyRequest): Promise<GatewayWebhookResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_gateway_webhook.schema(schema!);
      const { gateway_webhook_id } = (request?.params ?? {}) as { gateway_webhook_id?: string | number }
      if (gateway_webhook_id === undefined || gateway_webhook_id === '') throw httpError(400, 'gateway_webhook_id is required')
      const row = await model.findByPk(gateway_webhook_id)
      if (!row) {
        throw httpError(404, 'payment_gateway_webhook not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<GatewayWebhookResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteGatewayWebhook(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_gateway_webhook.schema(schema!);
      const { gateway_webhook_id } = (request?.params ?? {}) as { gateway_webhook_id?: string | number }
      if (gateway_webhook_id === undefined || gateway_webhook_id === '') throw httpError(400, 'gateway_webhook_id is required')
      const deletedCount = await model.destroy({ where: { gatewayWebhookId: gateway_webhook_id } })
      if (deletedCount === 0) throw httpError(404, 'payment_gateway_webhook not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
