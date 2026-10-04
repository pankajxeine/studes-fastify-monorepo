import type { UserAutogenerateReportsRequest } from './types/UserAutogenerateReportsRequest'
import type { UserAutogenerateReportsResponse } from './types/UserAutogenerateReportsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserAutogenerateReportsController, ListItem, PaginatedResponse } from './UserAutogenerateReportsController'

export class UserAutogenerateReportsService implements UserAutogenerateReportsController {
      public async listUserAutogenerateReports(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserAutogenerateReportsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_autogenerate_reports.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<UserAutogenerateReportsResponse[]>[],
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

      public async createUserAutogenerateReport(app: FastifyInstance, input: UserAutogenerateReportsRequest, request?: FastifyRequest): Promise<UserAutogenerateReportsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_autogenerate_reports.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as UserAutogenerateReportsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserAutogenerateReportsById(app: FastifyInstance, request?: FastifyRequest): Promise<UserAutogenerateReportsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_autogenerate_reports.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('user_autogenerate_reports not found')
      }
      return row.get({ plain: true }) as UserAutogenerateReportsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserAutogenerateReport(app: FastifyInstance, input: UserAutogenerateReportsRequest, request?: FastifyRequest): Promise<UserAutogenerateReportsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_autogenerate_reports.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('user_autogenerate_reports not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as UserAutogenerateReportsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserAutogenerateReport(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_autogenerate_reports.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
