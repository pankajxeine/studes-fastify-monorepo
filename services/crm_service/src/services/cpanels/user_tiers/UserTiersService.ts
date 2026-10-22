import type { UserTiersRequest } from './types/UserTiersRequest'
import type { UserTiersResponse } from './types/UserTiersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserTiersController, ListItem, PaginatedResponse } from './UserTiersController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';


export class UserTiersService implements UserTiersController {
      public async listUserTiers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserTiersResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.user_tiers.schema(schema!);
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<UserTiersResponse[]>[],
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

      public async createUserTier(app: FastifyInstance, input: UserTiersRequest, request?: FastifyRequest): Promise<UserTiersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.user_tiers.schema(schema!);
      const row = await models.user_tiers.schema(schema!).create(input as any)
      return row.get({ plain: true }) as UserTiersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserTiersById(app: FastifyInstance, request?: FastifyRequest): Promise<UserTiersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.user_tiers.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('user_tiers not found')
      }
      return row.get({ plain: true }) as UserTiersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserTier(app: FastifyInstance, input: UserTiersRequest, request?: FastifyRequest): Promise<UserTiersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.user_tiers.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('user_tiers not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as UserTiersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserTier(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const model = models.user_tiers.schema(schema!);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.user_tiers.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
