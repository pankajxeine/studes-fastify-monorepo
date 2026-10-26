import type { FxRateRequest } from './types/FxRateRequest'
import type { FxRateUpdateRequest } from './types/FxRateUpdateRequest'
import type { FxRateResponse } from './types/FxRateResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { FxRateController } from './FxRateController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class FxRateService implements FxRateController {
      public async listFxRate(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<FxRateResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_fx_rate.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<FxRateResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createFxRate(app: FastifyInstance, input: FxRateRequest, request?: FastifyRequest): Promise<FxRateResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_fx_rate.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<FxRateResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getFxRateById(app: FastifyInstance, request?: FastifyRequest): Promise<FxRateResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_fx_rate.schema(schema!);
      const { fx_rate_id } = (request?.params ?? {}) as { fx_rate_id?: string | number }
      if (fx_rate_id === undefined || fx_rate_id === '') throw httpError(400, 'fx_rate_id is required')
      const row = await model.findByPk(fx_rate_id)
      if (!row) {
        throw httpError(404, 'platform_fx_rate not found')
      }
      return toApiAttributes<FxRateResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateFxRate(app: FastifyInstance, input: FxRateUpdateRequest, request?: FastifyRequest): Promise<FxRateResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_fx_rate.schema(schema!);
      const { fx_rate_id } = (request?.params ?? {}) as { fx_rate_id?: string | number }
      if (fx_rate_id === undefined || fx_rate_id === '') throw httpError(400, 'fx_rate_id is required')
      const row = await model.findByPk(fx_rate_id)
      if (!row) {
        throw httpError(404, 'platform_fx_rate not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<FxRateResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteFxRate(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_fx_rate.schema(schema!);
      const { fx_rate_id } = (request?.params ?? {}) as { fx_rate_id?: string | number }
      if (fx_rate_id === undefined || fx_rate_id === '') throw httpError(400, 'fx_rate_id is required')
      const deletedCount = await model.destroy({ where: { fxRateId: fx_rate_id } })
      if (deletedCount === 0) throw httpError(404, 'platform_fx_rate not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
