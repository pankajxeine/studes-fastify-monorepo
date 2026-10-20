import type { UserAutogenerateReportsRequest } from './types/UserAutogenerateReportsRequest'
import type { UserAutogenerateReportsResponse } from './types/UserAutogenerateReportsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserAutogenerateReportsController, ListItem, PaginatedResponse } from './UserAutogenerateReportsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class UserAutogenerateReportsService implements UserAutogenerateReportsController {
      public async listUserAutogenerateReports(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserAutogenerateReportsResponse[]>>> {
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
      const { count, rows } = await models.user_autogenerate_reports.schema(schema!).findAndCountAll({
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.user_autogenerate_reports.schema(schema!).create(input as any)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.user_autogenerate_reports.schema(schema!).findByPk(id)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.user_autogenerate_reports.schema(schema!).findByPk(id)
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
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.user_autogenerate_reports.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
