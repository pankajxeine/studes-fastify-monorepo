import type { CustomersRequest } from './types/CustomersRequest'
import type { CustomersResponse } from './types/CustomersResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomersController } from './CustomersController'

export class CustomersService implements CustomersController {
  public async listCustomers(app: FastifyInstance, request?: FastifyRequest): Promise<CustomersResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customers.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as CustomersResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomer(app: FastifyInstance, input: CustomersRequest, request?: FastifyRequest): Promise<CustomersResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customers.schema(schema!)
      const row = await model.create(input as any)
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
      // bind model to tenant schema
      const model = app.cpanelModels.customers.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      // bind model to tenant schema
      const model = app.cpanelModels.customers.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      // bind model to tenant schema
      const model = app.cpanelModels.customers.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
