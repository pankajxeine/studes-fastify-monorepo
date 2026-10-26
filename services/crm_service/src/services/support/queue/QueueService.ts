import type { QueueRequest } from './types/QueueRequest'
import type { QueueUpdateRequest } from './types/QueueUpdateRequest'
import type { QueueResponse } from './types/QueueResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { QueueController } from './QueueController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class QueueService implements QueueController {
      public async listQueue(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<QueueResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_queue.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<QueueResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createQueue(app: FastifyInstance, input: QueueRequest, request?: FastifyRequest): Promise<QueueResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_queue.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<QueueResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getQueueById(app: FastifyInstance, request?: FastifyRequest): Promise<QueueResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_queue.schema(schema!);
      const { queue_id } = (request?.params ?? {}) as { queue_id?: string | number }
      if (queue_id === undefined || queue_id === '') throw httpError(400, 'queue_id is required')
      const row = await model.findByPk(queue_id)
      if (!row) {
        throw httpError(404, 'support_queue not found')
      }
      return toApiAttributes<QueueResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateQueue(app: FastifyInstance, input: QueueUpdateRequest, request?: FastifyRequest): Promise<QueueResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_queue.schema(schema!);
      const { queue_id } = (request?.params ?? {}) as { queue_id?: string | number }
      if (queue_id === undefined || queue_id === '') throw httpError(400, 'queue_id is required')
      const row = await model.findByPk(queue_id)
      if (!row) {
        throw httpError(404, 'support_queue not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<QueueResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteQueue(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_queue.schema(schema!);
      const { queue_id } = (request?.params ?? {}) as { queue_id?: string | number }
      if (queue_id === undefined || queue_id === '') throw httpError(400, 'queue_id is required')
      const deletedCount = await model.destroy({ where: { queueId: queue_id } })
      if (deletedCount === 0) throw httpError(404, 'support_queue not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
