import type { SubscriptionChangeRequest } from './types/SubscriptionChangeRequest'
import type { SubscriptionChangeUpdateRequest } from './types/SubscriptionChangeUpdateRequest'
import type { SubscriptionChangeResponse } from './types/SubscriptionChangeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { SubscriptionChangeController } from './SubscriptionChangeController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class SubscriptionChangeService implements SubscriptionChangeController {
      public async listSubscriptionChange(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SubscriptionChangeResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_change.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<SubscriptionChangeResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createSubscriptionChange(app: FastifyInstance, input: SubscriptionChangeRequest, request?: FastifyRequest): Promise<SubscriptionChangeResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_change.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<SubscriptionChangeResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSubscriptionChangeById(app: FastifyInstance, request?: FastifyRequest): Promise<SubscriptionChangeResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_change.schema(schema!);
      const { subscription_change_id } = (request?.params ?? {}) as { subscription_change_id?: string | number }
      if (subscription_change_id === undefined || subscription_change_id === '') throw httpError(400, 'subscription_change_id is required')
      const row = await model.findByPk(subscription_change_id)
      if (!row) {
        throw httpError(404, 'subscription_subscription_change not found')
      }
      return toApiAttributes<SubscriptionChangeResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSubscriptionChange(app: FastifyInstance, input: SubscriptionChangeUpdateRequest, request?: FastifyRequest): Promise<SubscriptionChangeResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_change.schema(schema!);
      const { subscription_change_id } = (request?.params ?? {}) as { subscription_change_id?: string | number }
      if (subscription_change_id === undefined || subscription_change_id === '') throw httpError(400, 'subscription_change_id is required')
      const row = await model.findByPk(subscription_change_id)
      if (!row) {
        throw httpError(404, 'subscription_subscription_change not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<SubscriptionChangeResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSubscriptionChange(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.subscription_subscription_change.schema(schema!);
      const { subscription_change_id } = (request?.params ?? {}) as { subscription_change_id?: string | number }
      if (subscription_change_id === undefined || subscription_change_id === '') throw httpError(400, 'subscription_change_id is required')
      const deletedCount = await model.destroy({ where: { subscriptionChangeId: subscription_change_id } })
      if (deletedCount === 0) throw httpError(404, 'subscription_subscription_change not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
