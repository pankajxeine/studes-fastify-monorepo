import type { InstituteSubscriptionsRequest } from './types/InstituteSubscriptionsRequest'
import type { InstituteSubscriptionsResponse } from './types/InstituteSubscriptionsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { InstituteSubscriptionsController, ListItem, PaginatedResponse } from './InstituteSubscriptionsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class InstituteSubscriptionsService implements InstituteSubscriptionsController {
      public async listInstituteSubscriptions(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InstituteSubscriptionsResponse[]>>> {
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
      const { count, rows } = await models.institute_subscriptions.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<InstituteSubscriptionsResponse[]>[],
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

      public async createInstituteSubscription(app: FastifyInstance, input: InstituteSubscriptionsRequest, request?: FastifyRequest): Promise<InstituteSubscriptionsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.institute_subscriptions.schema(schema!).create(input as any)
      return row.get({ plain: true }) as InstituteSubscriptionsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getInstituteSubscriptionsById(app: FastifyInstance, request?: FastifyRequest): Promise<InstituteSubscriptionsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.institute_subscriptions.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('institute_subscriptions not found')
      }
      return row.get({ plain: true }) as InstituteSubscriptionsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateInstituteSubscription(app: FastifyInstance, input: InstituteSubscriptionsRequest, request?: FastifyRequest): Promise<InstituteSubscriptionsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.institute_subscriptions.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('institute_subscriptions not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as InstituteSubscriptionsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteInstituteSubscription(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.institute_subscriptions.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
