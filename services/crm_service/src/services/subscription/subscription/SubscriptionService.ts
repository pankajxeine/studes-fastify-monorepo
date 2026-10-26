import type { SubscriptionRequest } from './types/SubscriptionRequest'
import type { SubscriptionUpdateRequest } from './types/SubscriptionUpdateRequest'
import type { SubscriptionResponse } from './types/SubscriptionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubscriptionController } from './SubscriptionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class SubscriptionService implements SubscriptionController {
      public async listSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubscriptionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<SubscriptionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createSubscription(app: FastifyInstance, input: SubscriptionRequest, request?: FastifyRequest): Promise<SubscriptionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<SubscriptionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubscriptionById(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription.schema(schema!);
      const { subscription_id } = (request?.params ?? {}) as { subscription_id?: string | number }
      if (subscription_id === undefined || subscription_id === '') throw httpError(400, 'subscription_id is required')
      const row = await model.findByPk(subscription_id)
      if (!row) {
        throw httpError(404, 'subscription_subscription not found')
      }
      return toApiAttributes<SubscriptionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubscription(app: FastifyInstance, input: SubscriptionUpdateRequest, request?: FastifyRequest): Promise<SubscriptionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription.schema(schema!);
      const { subscription_id } = (request?.params ?? {}) as { subscription_id?: string | number }
      if (subscription_id === undefined || subscription_id === '') throw httpError(400, 'subscription_id is required')
      const row = await model.findByPk(subscription_id)
      if (!row) {
        throw httpError(404, 'subscription_subscription not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<SubscriptionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription.schema(schema!);
      const { subscription_id } = (request?.params ?? {}) as { subscription_id?: string | number }
      if (subscription_id === undefined || subscription_id === '') throw httpError(400, 'subscription_id is required')
      const deletedCount = await model.destroy({ where: { subscriptionId: subscription_id } })
      if (deletedCount === 0) throw httpError(404, 'subscription_subscription not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
