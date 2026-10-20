import type { CustomerStatusLogsRequest } from './types/CustomerStatusLogsRequest'
import type { CustomerStatusLogsResponse } from './types/CustomerStatusLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerStatusLogsController, ListItem, PaginatedResponse } from './CustomerStatusLogsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class CustomerStatusLogsService implements CustomerStatusLogsController {
      public async listCustomerStatusLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerStatusLogsResponse[]>>> {
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
      const { count, rows } = await models.customer_status_logs.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CustomerStatusLogsResponse[]>[],
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

      public async createCustomerStatusLog(app: FastifyInstance, input: CustomerStatusLogsRequest, request?: FastifyRequest): Promise<CustomerStatusLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.customer_status_logs.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CustomerStatusLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCustomerStatusLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.customer_status_logs.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('customer_status_logs not found')
      }
      return row.get({ plain: true }) as CustomerStatusLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCustomerStatusLog(app: FastifyInstance, input: CustomerStatusLogsRequest, request?: FastifyRequest): Promise<CustomerStatusLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.customer_status_logs.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('customer_status_logs not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomerStatusLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCustomerStatusLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.customer_status_logs.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
