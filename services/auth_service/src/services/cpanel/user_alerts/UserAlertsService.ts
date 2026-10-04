import type { UserAlertsRequest } from './types/UserAlertsRequest'
import type { UserAlertsResponse } from './types/UserAlertsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserAlertsController, ListItem, PaginatedResponse } from './UserAlertsController'

export class UserAlertsService implements UserAlertsController {
      public async listUserAlerts(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserAlertsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_alerts.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<UserAlertsResponse[]>[],
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

      public async createUserAlert(app: FastifyInstance, input: UserAlertsRequest, request?: FastifyRequest): Promise<UserAlertsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_alerts.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as UserAlertsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserAlertsById(app: FastifyInstance, request?: FastifyRequest): Promise<UserAlertsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_alerts.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('user_alerts not found')
      }
      return row.get({ plain: true }) as UserAlertsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserAlert(app: FastifyInstance, input: UserAlertsRequest, request?: FastifyRequest): Promise<UserAlertsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_alerts.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('user_alerts not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as UserAlertsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserAlert(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.user_alerts.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
