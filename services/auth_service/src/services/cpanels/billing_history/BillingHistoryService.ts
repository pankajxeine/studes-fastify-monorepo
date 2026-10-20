import type { BillingHistoryRequest } from './types/BillingHistoryRequest'
import type { BillingHistoryResponse } from './types/BillingHistoryResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { BillingHistoryController, ListItem, PaginatedResponse } from './BillingHistoryController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class BillingHistoryService implements BillingHistoryController {
      public async listBillingHistory(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<BillingHistoryResponse[]>>> {
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
      const { count, rows } = await models.billing_history.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<BillingHistoryResponse[]>[],
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

      public async createBillingHistory(app: FastifyInstance, input: BillingHistoryRequest, request?: FastifyRequest): Promise<BillingHistoryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.billing_history.schema(schema!).create(input as any)
      return row.get({ plain: true }) as BillingHistoryResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getBillingHistoryById(app: FastifyInstance, request?: FastifyRequest): Promise<BillingHistoryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.billing_history.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('billing_history not found')
      }
      return row.get({ plain: true }) as BillingHistoryResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateBillingHistory(app: FastifyInstance, input: BillingHistoryRequest, request?: FastifyRequest): Promise<BillingHistoryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.billing_history.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('billing_history not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as BillingHistoryResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteBillingHistory(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.billing_history.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
