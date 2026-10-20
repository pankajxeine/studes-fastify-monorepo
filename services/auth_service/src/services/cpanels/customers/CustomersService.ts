import type { CustomersRequest } from './types/CustomersRequest'
import type { CustomersResponse } from './types/CustomersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomersController, ListItem, PaginatedResponse } from './CustomersController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class CustomersService implements CustomersController {
      public async listCustomers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomersResponse[]>>> {
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
      const { count, rows } = await models.customers.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CustomersResponse[]>[],
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

      public async createCustomer(app: FastifyInstance, input: CustomersRequest, request?: FastifyRequest): Promise<CustomersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.customers.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CustomersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCustomersById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.customers.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('customers not found')
      }
      return row.get({ plain: true }) as CustomersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCustomer(app: FastifyInstance, input: CustomersRequest, request?: FastifyRequest): Promise<CustomersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.customers.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('customers not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCustomer(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.customers.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
