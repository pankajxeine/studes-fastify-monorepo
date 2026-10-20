import type { CustomerStatusTimeLogsRequest } from './types/CustomerStatusTimeLogsRequest'
import type { CustomerStatusTimeLogsResponse } from './types/CustomerStatusTimeLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerStatusTimeLogsController, ListItem, PaginatedResponse } from './CustomerStatusTimeLogsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class CustomerStatusTimeLogsService implements CustomerStatusTimeLogsController {
      public async listCustomerStatusTimeLogs(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerStatusTimeLogsResponse[]>>> {
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
      const { count, rows } = await models.customer_status_time_logs.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CustomerStatusTimeLogsResponse[]>[],
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

      public async createCustomerStatusTimeLog(app: FastifyInstance, input: CustomerStatusTimeLogsRequest, request?: FastifyRequest): Promise<CustomerStatusTimeLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.customer_status_time_logs.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CustomerStatusTimeLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCustomerStatusTimeLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusTimeLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.customer_status_time_logs.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('customer_status_time_logs not found')
      }
      return row.get({ plain: true }) as CustomerStatusTimeLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCustomerStatusTimeLog(app: FastifyInstance, input: CustomerStatusTimeLogsRequest, request?: FastifyRequest): Promise<CustomerStatusTimeLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.customer_status_time_logs.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('customer_status_time_logs not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomerStatusTimeLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCustomerStatusTimeLog(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.customer_status_time_logs.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
