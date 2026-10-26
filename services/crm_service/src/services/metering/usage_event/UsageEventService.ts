import type { UsageEventRequest } from './types/UsageEventRequest'
import type { UsageEventUpdateRequest } from './types/UsageEventUpdateRequest'
import type { UsageEventResponse } from './types/UsageEventResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { UsageEventController } from './UsageEventController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class UsageEventService implements UsageEventController {
      public async listUsageEvent(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UsageEventResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_usage_event.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<UsageEventResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createUsageEvent(app: FastifyInstance, input: UsageEventRequest, request?: FastifyRequest): Promise<UsageEventResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_usage_event.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<UsageEventResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUsageEventById(app: FastifyInstance, request?: FastifyRequest): Promise<UsageEventResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_usage_event.schema(schema!);
      const { usage_event_id } = (request?.params ?? {}) as { usage_event_id?: string | number }
      if (usage_event_id === undefined || usage_event_id === '') throw httpError(400, 'usage_event_id is required')
      const row = await model.findByPk(usage_event_id)
      if (!row) {
        throw httpError(404, 'metering_usage_event not found')
      }
      return toApiAttributes<UsageEventResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUsageEvent(app: FastifyInstance, input: UsageEventUpdateRequest, request?: FastifyRequest): Promise<UsageEventResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_usage_event.schema(schema!);
      const { usage_event_id } = (request?.params ?? {}) as { usage_event_id?: string | number }
      if (usage_event_id === undefined || usage_event_id === '') throw httpError(400, 'usage_event_id is required')
      const row = await model.findByPk(usage_event_id)
      if (!row) {
        throw httpError(404, 'metering_usage_event not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<UsageEventResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUsageEvent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_usage_event.schema(schema!);
      const { usage_event_id } = (request?.params ?? {}) as { usage_event_id?: string | number }
      if (usage_event_id === undefined || usage_event_id === '') throw httpError(400, 'usage_event_id is required')
      const deletedCount = await model.destroy({ where: { usageEventId: usage_event_id } })
      if (deletedCount === 0) throw httpError(404, 'metering_usage_event not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
