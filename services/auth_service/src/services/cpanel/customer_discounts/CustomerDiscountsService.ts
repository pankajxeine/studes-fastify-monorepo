import type { CustomerDiscountsRequest } from './types/CustomerDiscountsRequest'
import type { CustomerDiscountsResponse } from './types/CustomerDiscountsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerDiscountsController } from './CustomerDiscountsController'

export class CustomerDiscountsService implements CustomerDiscountsController {
  public async listCustomerDiscounts(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDiscountsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_discounts.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as CustomerDiscountsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerDiscount(app: FastifyInstance, input: CustomerDiscountsRequest, request?: FastifyRequest): Promise<CustomerDiscountsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_discounts.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CustomerDiscountsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getCustomerDiscountsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDiscountsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_discounts.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_discounts.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_discounts.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
