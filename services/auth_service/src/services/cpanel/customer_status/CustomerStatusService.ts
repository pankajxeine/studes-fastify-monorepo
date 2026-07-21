import type { CustomerStatusRequest } from './types/CustomerStatusRequest'
import type { CustomerStatusResponse } from './types/CustomerStatusResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerStatusController } from './CustomerStatusController'

export class CustomerStatusService implements CustomerStatusController {
  public async listCustomerStatus(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as CustomerStatusResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerStatu(app: FastifyInstance, input: CustomerStatusRequest, request?: FastifyRequest): Promise<CustomerStatusResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CustomerStatusResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getCustomerStatusById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_status not found')
      }
      return row.get({ plain: true }) as CustomerStatusResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async updateCustomerStatu(app: FastifyInstance, input: CustomerStatusRequest, request?: FastifyRequest): Promise<CustomerStatusResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_status not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomerStatusResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async deleteCustomerStatu(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
