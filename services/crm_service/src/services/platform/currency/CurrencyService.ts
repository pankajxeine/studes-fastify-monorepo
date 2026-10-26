import type { CurrencyRequest } from './types/CurrencyRequest'
import type { CurrencyUpdateRequest } from './types/CurrencyUpdateRequest'
import type { CurrencyResponse } from './types/CurrencyResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { CurrencyController } from './CurrencyController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class CurrencyService implements CurrencyController {
      public async listCurrency(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CurrencyResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_currency.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<CurrencyResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createCurrency(app: FastifyInstance, input: CurrencyRequest, request?: FastifyRequest): Promise<CurrencyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_currency.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<CurrencyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCurrencyById(app: FastifyInstance, request?: FastifyRequest): Promise<CurrencyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_currency.schema(schema!);
      const { currency_id } = (request?.params ?? {}) as { currency_id?: string | number }
      if (currency_id === undefined || currency_id === '') throw httpError(400, 'currency_id is required')
      const row = await model.findByPk(currency_id)
      if (!row) {
        throw httpError(404, 'platform_currency not found')
      }
      return toApiAttributes<CurrencyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCurrency(app: FastifyInstance, input: CurrencyUpdateRequest, request?: FastifyRequest): Promise<CurrencyResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_currency.schema(schema!);
      const { currency_id } = (request?.params ?? {}) as { currency_id?: string | number }
      if (currency_id === undefined || currency_id === '') throw httpError(400, 'currency_id is required')
      const row = await model.findByPk(currency_id)
      if (!row) {
        throw httpError(404, 'platform_currency not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<CurrencyResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCurrency(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_currency.schema(schema!);
      const { currency_id } = (request?.params ?? {}) as { currency_id?: string | number }
      if (currency_id === undefined || currency_id === '') throw httpError(400, 'currency_id is required')
      const deletedCount = await model.destroy({ where: { currencyId: currency_id } })
      if (deletedCount === 0) throw httpError(404, 'platform_currency not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
