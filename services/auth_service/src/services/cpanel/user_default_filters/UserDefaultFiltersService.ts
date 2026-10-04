import type { UserDefaultFiltersRequest } from './types/UserDefaultFiltersRequest'
import type { UserDefaultFiltersResponse } from './types/UserDefaultFiltersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserDefaultFiltersController, ListItem, PaginatedResponse } from './UserDefaultFiltersController'

export class UserDefaultFiltersService implements UserDefaultFiltersController {
      public async listUserDefaultFilters(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserDefaultFiltersResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_default_filters.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<UserDefaultFiltersResponse[]>[],
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

      public async createUserDefaultFilter(app: FastifyInstance, input: UserDefaultFiltersRequest, request?: FastifyRequest): Promise<UserDefaultFiltersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_default_filters.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as UserDefaultFiltersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserDefaultFiltersById(app: FastifyInstance, request?: FastifyRequest): Promise<UserDefaultFiltersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_default_filters.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('user_default_filters not found')
      }
      return row.get({ plain: true }) as UserDefaultFiltersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserDefaultFilter(app: FastifyInstance, input: UserDefaultFiltersRequest, request?: FastifyRequest): Promise<UserDefaultFiltersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_default_filters.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('user_default_filters not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as UserDefaultFiltersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserDefaultFilter(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_default_filters.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
