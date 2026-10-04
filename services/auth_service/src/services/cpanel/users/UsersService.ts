import type { UsersRequest } from './types/UsersRequest'
import type { UsersResponse } from './types/UsersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UsersController, ListItem, PaginatedResponse } from './UsersController'

export class UsersService implements UsersController {
      public async listUsers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UsersResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.users.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<UsersResponse[]>[],
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

      public async createUser(app: FastifyInstance, input: UsersRequest, request?: FastifyRequest): Promise<UsersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.users.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as UsersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUsersById(app: FastifyInstance, request?: FastifyRequest): Promise<UsersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.users.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('users not found')
      }
      return row.get({ plain: true }) as UsersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUser(app: FastifyInstance, input: UsersRequest, request?: FastifyRequest): Promise<UsersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.users.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('users not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as UsersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUser(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.users.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
