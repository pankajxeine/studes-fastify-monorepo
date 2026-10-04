import type { CustomerSalesAgentsRequest } from './types/CustomerSalesAgentsRequest'
import type { CustomerSalesAgentsResponse } from './types/CustomerSalesAgentsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerSalesAgentsController, ListItem, PaginatedResponse } from './CustomerSalesAgentsController'

export class CustomerSalesAgentsService implements CustomerSalesAgentsController {
      public async listCustomerSalesAgents(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerSalesAgentsResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_sales_agents.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CustomerSalesAgentsResponse[]>[],
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

      public async createCustomerSalesAgent(app: FastifyInstance, input: CustomerSalesAgentsRequest, request?: FastifyRequest): Promise<CustomerSalesAgentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_sales_agents.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CustomerSalesAgentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCustomerSalesAgentsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerSalesAgentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_sales_agents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_sales_agents not found')
      }
      return row.get({ plain: true }) as CustomerSalesAgentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCustomerSalesAgent(app: FastifyInstance, input: CustomerSalesAgentsRequest, request?: FastifyRequest): Promise<CustomerSalesAgentsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_sales_agents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_sales_agents not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomerSalesAgentsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCustomerSalesAgent(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_sales_agents.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
