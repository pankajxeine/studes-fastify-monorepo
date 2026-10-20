import type { UserAlertsTypeRequest } from './types/UserAlertsTypeRequest'
import type { UserAlertsTypeResponse } from './types/UserAlertsTypeResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserAlertsTypeController, ListItem, PaginatedResponse } from './UserAlertsTypeController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class UserAlertsTypeService implements UserAlertsTypeController {
      public async listUserAlertsType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserAlertsTypeResponse[]>>> {
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
      const { count, rows } = await models.user_alerts_type.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<UserAlertsTypeResponse[]>[],
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

      public async createUserAlertsType(app: FastifyInstance, input: UserAlertsTypeRequest, request?: FastifyRequest): Promise<UserAlertsTypeResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.user_alerts_type.schema(schema!).create(input as any)
      return row.get({ plain: true }) as UserAlertsTypeResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserAlertsTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<UserAlertsTypeResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.user_alerts_type.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('user_alerts_type not found')
      }
      return row.get({ plain: true }) as UserAlertsTypeResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserAlertsType(app: FastifyInstance, input: UserAlertsTypeRequest, request?: FastifyRequest): Promise<UserAlertsTypeResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.user_alerts_type.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('user_alerts_type not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as UserAlertsTypeResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserAlertsType(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.user_alerts_type.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
