import type { UserCustomerStatusRequest } from './types/UserCustomerStatusRequest'
import type { UserCustomerStatusResponse } from './types/UserCustomerStatusResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { UserCustomerStatusController, ListItem, PaginatedResponse } from './UserCustomerStatusController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class UserCustomerStatusService implements UserCustomerStatusController {
      public async listUserCustomerStatus(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<UserCustomerStatusResponse[]>>> {
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
      const { count, rows } = await models.user_customer_status.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<UserCustomerStatusResponse[]>[],
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

      public async createUserCustomerStatu(app: FastifyInstance, input: UserCustomerStatusRequest, request?: FastifyRequest): Promise<UserCustomerStatusResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.user_customer_status.schema(schema!).create(input as any)
      return row.get({ plain: true }) as UserCustomerStatusResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getUserCustomerStatusById(app: FastifyInstance, request?: FastifyRequest): Promise<UserCustomerStatusResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.user_customer_status.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('user_customer_status not found')
      }
      return row.get({ plain: true }) as UserCustomerStatusResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateUserCustomerStatu(app: FastifyInstance, input: UserCustomerStatusRequest, request?: FastifyRequest): Promise<UserCustomerStatusResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.user_customer_status.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('user_customer_status not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as UserCustomerStatusResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteUserCustomerStatu(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.user_customer_status.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
