import type { DeliveryAttemptRequest } from './types/DeliveryAttemptRequest'
import type { DeliveryAttemptUpdateRequest } from './types/DeliveryAttemptUpdateRequest'
import type { DeliveryAttemptResponse } from './types/DeliveryAttemptResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { DeliveryAttemptController } from './DeliveryAttemptController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class DeliveryAttemptService implements DeliveryAttemptController {
      public async listDeliveryAttempt(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DeliveryAttemptResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_delivery_attempt.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<DeliveryAttemptResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createDeliveryAttempt(app: FastifyInstance, input: DeliveryAttemptRequest, request?: FastifyRequest): Promise<DeliveryAttemptResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_delivery_attempt.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<DeliveryAttemptResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getDeliveryAttemptById(app: FastifyInstance, request?: FastifyRequest): Promise<DeliveryAttemptResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_delivery_attempt.schema(schema!);
      const { delivery_attempt_id } = (request?.params ?? {}) as { delivery_attempt_id?: string | number }
      if (delivery_attempt_id === undefined || delivery_attempt_id === '') throw httpError(400, 'delivery_attempt_id is required')
      const row = await model.findByPk(delivery_attempt_id)
      if (!row) {
        throw httpError(404, 'notify_delivery_attempt not found')
      }
      return toApiAttributes<DeliveryAttemptResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateDeliveryAttempt(app: FastifyInstance, input: DeliveryAttemptUpdateRequest, request?: FastifyRequest): Promise<DeliveryAttemptResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_delivery_attempt.schema(schema!);
      const { delivery_attempt_id } = (request?.params ?? {}) as { delivery_attempt_id?: string | number }
      if (delivery_attempt_id === undefined || delivery_attempt_id === '') throw httpError(400, 'delivery_attempt_id is required')
      const row = await model.findByPk(delivery_attempt_id)
      if (!row) {
        throw httpError(404, 'notify_delivery_attempt not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<DeliveryAttemptResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteDeliveryAttempt(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_delivery_attempt.schema(schema!);
      const { delivery_attempt_id } = (request?.params ?? {}) as { delivery_attempt_id?: string | number }
      if (delivery_attempt_id === undefined || delivery_attempt_id === '') throw httpError(400, 'delivery_attempt_id is required')
      const deletedCount = await model.destroy({ where: { deliveryAttemptId: delivery_attempt_id } })
      if (deletedCount === 0) throw httpError(404, 'notify_delivery_attempt not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
