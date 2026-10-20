import type { UserSalesAgentsRequest } from './types/UserSalesAgentsRequest'
import type { UserSalesAgentsResponse } from './types/UserSalesAgentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserSalesAgentsController, ListItem, PaginatedResponse } from './UserSalesAgentsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class UserSalesAgentsService implements UserSalesAgentsController {
      public async listUserSalesAgents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserSalesAgentsResponse[]>>> {
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
      const { count, rows } = await models.user_sales_agents.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<UserSalesAgentsResponse[]>[],
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

      public async createUserSalesAgent(app: FastifyInstance, input: UserSalesAgentsRequest, request?: FastifyRequest): Promise<UserSalesAgentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.user_sales_agents.schema(schema!).create(input as any)
      return row.get({ plain: true }) as UserSalesAgentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserSalesAgentsById(app: FastifyInstance, request?: FastifyRequest): Promise<UserSalesAgentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.user_sales_agents.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('user_sales_agents not found')
      }
      return row.get({ plain: true }) as UserSalesAgentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserSalesAgent(app: FastifyInstance, input: UserSalesAgentsRequest, request?: FastifyRequest): Promise<UserSalesAgentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.user_sales_agents.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('user_sales_agents not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as UserSalesAgentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserSalesAgent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.user_sales_agents.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
