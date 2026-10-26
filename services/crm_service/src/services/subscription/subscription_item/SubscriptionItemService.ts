import type { SubscriptionItemRequest } from './types/SubscriptionItemRequest'
import type { SubscriptionItemUpdateRequest } from './types/SubscriptionItemUpdateRequest'
import type { SubscriptionItemResponse } from './types/SubscriptionItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubscriptionItemController } from './SubscriptionItemController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class SubscriptionItemService implements SubscriptionItemController {
      public async listSubscriptionItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubscriptionItemResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_item.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<SubscriptionItemResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createSubscriptionItem(app: FastifyInstance, input: SubscriptionItemRequest, request?: FastifyRequest): Promise<SubscriptionItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_item.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<SubscriptionItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubscriptionItemById(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_item.schema(schema!);
      const { subscription_item_id } = (request?.params ?? {}) as { subscription_item_id?: string | number }
      if (subscription_item_id === undefined || subscription_item_id === '') throw httpError(400, 'subscription_item_id is required')
      const row = await model.findByPk(subscription_item_id)
      if (!row) {
        throw httpError(404, 'subscription_subscription_item not found')
      }
      return toApiAttributes<SubscriptionItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubscriptionItem(app: FastifyInstance, input: SubscriptionItemUpdateRequest, request?: FastifyRequest): Promise<SubscriptionItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_item.schema(schema!);
      const { subscription_item_id } = (request?.params ?? {}) as { subscription_item_id?: string | number }
      if (subscription_item_id === undefined || subscription_item_id === '') throw httpError(400, 'subscription_item_id is required')
      const row = await model.findByPk(subscription_item_id)
      if (!row) {
        throw httpError(404, 'subscription_subscription_item not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<SubscriptionItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubscriptionItem(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_item.schema(schema!);
      const { subscription_item_id } = (request?.params ?? {}) as { subscription_item_id?: string | number }
      if (subscription_item_id === undefined || subscription_item_id === '') throw httpError(400, 'subscription_item_id is required')
      const deletedCount = await model.destroy({ where: { subscriptionItemId: subscription_item_id } })
      if (deletedCount === 0) throw httpError(404, 'subscription_subscription_item not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
