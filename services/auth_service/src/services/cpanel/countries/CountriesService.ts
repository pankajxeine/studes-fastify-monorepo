import type { CountriesRequest } from './types/CountriesRequest'
import type { CountriesResponse } from './types/CountriesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CountriesController, ListItem, PaginatedResponse } from './CountriesController'

export class CountriesService implements CountriesController {
      public async listCountries(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CountriesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.countries.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CountriesResponse[]>[],
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

      public async createCountrie(app: FastifyInstance, input: CountriesRequest, request?: FastifyRequest): Promise<CountriesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.countries.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CountriesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCountriesById(app: FastifyInstance, request?: FastifyRequest): Promise<CountriesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.countries.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('countries not found')
      }
      return row.get({ plain: true }) as CountriesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCountrie(app: FastifyInstance, input: CountriesRequest, request?: FastifyRequest): Promise<CountriesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.countries.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('countries not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CountriesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCountrie(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.countries.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
