import type { UsageCounterRequest } from './types/UsageCounterRequest'
import type { UsageCounterUpdateRequest } from './types/UsageCounterUpdateRequest'
import type { UsageCounterResponse } from './types/UsageCounterResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { UsageCounterController } from './UsageCounterController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class UsageCounterService implements UsageCounterController {
      public async listUsageCounter(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UsageCounterResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_usage_counter.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<UsageCounterResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createUsageCounter(app: FastifyInstance, input: UsageCounterRequest, request?: FastifyRequest): Promise<UsageCounterResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_usage_counter.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<UsageCounterResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUsageCounterById(app: FastifyInstance, request?: FastifyRequest): Promise<UsageCounterResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_usage_counter.schema(schema!);
      const { usage_counter_id } = (request?.params ?? {}) as { usage_counter_id?: string | number }
      if (usage_counter_id === undefined || usage_counter_id === '') throw httpError(400, 'usage_counter_id is required')
      const row = await model.findByPk(usage_counter_id)
      if (!row) {
        throw httpError(404, 'metering_usage_counter not found')
      }
      return toApiAttributes<UsageCounterResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUsageCounter(app: FastifyInstance, input: UsageCounterUpdateRequest, request?: FastifyRequest): Promise<UsageCounterResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_usage_counter.schema(schema!);
      const { usage_counter_id } = (request?.params ?? {}) as { usage_counter_id?: string | number }
      if (usage_counter_id === undefined || usage_counter_id === '') throw httpError(400, 'usage_counter_id is required')
      const row = await model.findByPk(usage_counter_id)
      if (!row) {
        throw httpError(404, 'metering_usage_counter not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<UsageCounterResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUsageCounter(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.metering_usage_counter.schema(schema!);
      const { usage_counter_id } = (request?.params ?? {}) as { usage_counter_id?: string | number }
      if (usage_counter_id === undefined || usage_counter_id === '') throw httpError(400, 'usage_counter_id is required')
      const deletedCount = await model.destroy({ where: { usageCounterId: usage_counter_id } })
      if (deletedCount === 0) throw httpError(404, 'metering_usage_counter not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
