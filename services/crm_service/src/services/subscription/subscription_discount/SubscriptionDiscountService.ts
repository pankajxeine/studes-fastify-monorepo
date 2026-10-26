import type { SubscriptionDiscountRequest } from './types/SubscriptionDiscountRequest'
import type { SubscriptionDiscountUpdateRequest } from './types/SubscriptionDiscountUpdateRequest'
import type { SubscriptionDiscountResponse } from './types/SubscriptionDiscountResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubscriptionDiscountController } from './SubscriptionDiscountController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class SubscriptionDiscountService implements SubscriptionDiscountController {
      public async listSubscriptionDiscount(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubscriptionDiscountResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_discount.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<SubscriptionDiscountResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createSubscriptionDiscount(app: FastifyInstance, input: SubscriptionDiscountRequest, request?: FastifyRequest): Promise<SubscriptionDiscountResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_discount.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<SubscriptionDiscountResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubscriptionDiscountById(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionDiscountResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_discount.schema(schema!);
      const { subscription_discount_id } = (request?.params ?? {}) as { subscription_discount_id?: string | number }
      if (subscription_discount_id === undefined || subscription_discount_id === '') throw httpError(400, 'subscription_discount_id is required')
      const row = await model.findByPk(subscription_discount_id)
      if (!row) {
        throw httpError(404, 'subscription_subscription_discount not found')
      }
      return toApiAttributes<SubscriptionDiscountResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubscriptionDiscount(app: FastifyInstance, input: SubscriptionDiscountUpdateRequest, request?: FastifyRequest): Promise<SubscriptionDiscountResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_discount.schema(schema!);
      const { subscription_discount_id } = (request?.params ?? {}) as { subscription_discount_id?: string | number }
      if (subscription_discount_id === undefined || subscription_discount_id === '') throw httpError(400, 'subscription_discount_id is required')
      const row = await model.findByPk(subscription_discount_id)
      if (!row) {
        throw httpError(404, 'subscription_subscription_discount not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<SubscriptionDiscountResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubscriptionDiscount(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_discount.schema(schema!);
      const { subscription_discount_id } = (request?.params ?? {}) as { subscription_discount_id?: string | number }
      if (subscription_discount_id === undefined || subscription_discount_id === '') throw httpError(400, 'subscription_discount_id is required')
      const deletedCount = await model.destroy({ where: { subscriptionDiscountId: subscription_discount_id } })
      if (deletedCount === 0) throw httpError(404, 'subscription_subscription_discount not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
