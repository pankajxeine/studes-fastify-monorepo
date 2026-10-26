import type { NumberSeriesRequest } from './types/NumberSeriesRequest'
import type { NumberSeriesUpdateRequest } from './types/NumberSeriesUpdateRequest'
import type { NumberSeriesResponse } from './types/NumberSeriesResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { NumberSeriesController } from './NumberSeriesController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class NumberSeriesService implements NumberSeriesController {
      public async listNumberSeries(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<NumberSeriesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_number_series.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<NumberSeriesResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createNumberSeries(app: FastifyInstance, input: NumberSeriesRequest, request?: FastifyRequest): Promise<NumberSeriesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_number_series.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<NumberSeriesResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getNumberSeriesById(app: FastifyInstance, request?: FastifyRequest): Promise<NumberSeriesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_number_series.schema(schema!);
      const { number_series_id } = (request?.params ?? {}) as { number_series_id?: string | number }
      if (number_series_id === undefined || number_series_id === '') throw httpError(400, 'number_series_id is required')
      const row = await model.findByPk(number_series_id)
      if (!row) {
        throw httpError(404, 'billing_number_series not found')
      }
      return toApiAttributes<NumberSeriesResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateNumberSeries(app: FastifyInstance, input: NumberSeriesUpdateRequest, request?: FastifyRequest): Promise<NumberSeriesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_number_series.schema(schema!);
      const { number_series_id } = (request?.params ?? {}) as { number_series_id?: string | number }
      if (number_series_id === undefined || number_series_id === '') throw httpError(400, 'number_series_id is required')
      const row = await model.findByPk(number_series_id)
      if (!row) {
        throw httpError(404, 'billing_number_series not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<NumberSeriesResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteNumberSeries(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_number_series.schema(schema!);
      const { number_series_id } = (request?.params ?? {}) as { number_series_id?: string | number }
      if (number_series_id === undefined || number_series_id === '') throw httpError(400, 'number_series_id is required')
      const deletedCount = await model.destroy({ where: { numberSeriesId: number_series_id } })
      if (deletedCount === 0) throw httpError(404, 'billing_number_series not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
