import type { UserFiltersRequest } from './types/UserFiltersRequest'
import type { UserFiltersResponse } from './types/UserFiltersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserFiltersController, ListItem, PaginatedResponse } from './UserFiltersController'

export class UserFiltersService implements UserFiltersController {
      public async listUserFilters(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserFiltersResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_filters.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<UserFiltersResponse[]>[],
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

      public async createUserFilter(app: FastifyInstance, input: UserFiltersRequest, request?: FastifyRequest): Promise<UserFiltersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_filters.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as UserFiltersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserFiltersById(app: FastifyInstance, request?: FastifyRequest): Promise<UserFiltersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_filters.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('user_filters not found')
      }
      return row.get({ plain: true }) as UserFiltersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserFilter(app: FastifyInstance, input: UserFiltersRequest, request?: FastifyRequest): Promise<UserFiltersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_filters.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('user_filters not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as UserFiltersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserFilter(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_filters.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
