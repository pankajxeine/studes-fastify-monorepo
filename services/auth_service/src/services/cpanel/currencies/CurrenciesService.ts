import type { CurrenciesRequest } from './types/CurrenciesRequest'
import type { CurrenciesResponse } from './types/CurrenciesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CurrenciesController, ListItem, PaginatedResponse } from './CurrenciesController'

export class CurrenciesService implements CurrenciesController {
      public async listCurrencies(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CurrenciesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.currencies.schema(schema!)
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
      // bind model to tenant schema
      const model = app.cpanelModels.currencies.schema(schema!)
      const row = await model.create(input as any)
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
      // bind model to tenant schema
      const model = app.cpanelModels.currencies.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      // bind model to tenant schema
      const model = app.cpanelModels.currencies.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      // bind model to tenant schema
      const model = app.cpanelModels.currencies.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
