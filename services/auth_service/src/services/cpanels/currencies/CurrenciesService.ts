import type { CurrenciesRequest } from './types/CurrenciesRequest'
import type { CurrenciesResponse } from './types/CurrenciesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CurrenciesController, ListItem, PaginatedResponse } from './CurrenciesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class CurrenciesService implements CurrenciesController {
      public async listCurrencies(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CurrenciesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const query = (request?.query ?? {}) as { page?: string | number; limit?: string | number }
      const parsePositiveInteger = (value: string | number | undefined, fallback: number) => {
        const parsed = Number(value)
        return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback
      }
      const page = parsePositiveInteger(query.page, 1)
      const limit = Math.min(parsePositiveInteger(query.limit, 20), 100)
      const { count, rows } = await models.currencies.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CurrenciesResponse[]>[],
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

      public async createCurrencie(app: FastifyInstance, input: CurrenciesRequest, request?: FastifyRequest): Promise<CurrenciesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.currencies.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CurrenciesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCurrenciesById(app: FastifyInstance, request?: FastifyRequest): Promise<CurrenciesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.currencies.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('currencies not found')
      }
      return row.get({ plain: true }) as CurrenciesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCurrencie(app: FastifyInstance, input: CurrenciesRequest, request?: FastifyRequest): Promise<CurrenciesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.currencies.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('currencies not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CurrenciesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCurrencie(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.currencies.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
