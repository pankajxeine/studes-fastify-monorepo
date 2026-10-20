import type { CustomerDiscountsRequest } from './types/CustomerDiscountsRequest'
import type { CustomerDiscountsResponse } from './types/CustomerDiscountsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerDiscountsController, ListItem, PaginatedResponse } from './CustomerDiscountsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class CustomerDiscountsService implements CustomerDiscountsController {
      public async listCustomerDiscounts(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerDiscountsResponse[]>>> {
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
      const { count, rows } = await models.customer_discounts.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CustomerDiscountsResponse[]>[],
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

      public async createCustomerDiscount(app: FastifyInstance, input: CustomerDiscountsRequest, request?: FastifyRequest): Promise<CustomerDiscountsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.customer_discounts.schema(schema!).create(input as any)
      return row.get({ plain: true }) as CustomerDiscountsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCustomerDiscountsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDiscountsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.customer_discounts.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('customer_discounts not found')
      }
      return row.get({ plain: true }) as CustomerDiscountsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCustomerDiscount(app: FastifyInstance, input: CustomerDiscountsRequest, request?: FastifyRequest): Promise<CustomerDiscountsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.customer_discounts.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('customer_discounts not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomerDiscountsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCustomerDiscount(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.customer_discounts.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
