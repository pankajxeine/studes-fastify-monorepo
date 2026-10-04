import type { CustomerNumbersRequest } from './types/CustomerNumbersRequest'
import type { CustomerNumbersResponse } from './types/CustomerNumbersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerNumbersController, ListItem, PaginatedResponse } from './CustomerNumbersController'

export class CustomerNumbersService implements CustomerNumbersController {
      public async listCustomerNumbers(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerNumbersResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_numbers.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CustomerNumbersResponse[]>[],
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

      public async createCustomerNumber(app: FastifyInstance, input: CustomerNumbersRequest, request?: FastifyRequest): Promise<CustomerNumbersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_numbers.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CustomerNumbersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCustomerNumbersById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerNumbersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_numbers.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_numbers not found')
      }
      return row.get({ plain: true }) as CustomerNumbersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCustomerNumber(app: FastifyInstance, input: CustomerNumbersRequest, request?: FastifyRequest): Promise<CustomerNumbersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_numbers.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_numbers not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomerNumbersResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCustomerNumber(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_numbers.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
