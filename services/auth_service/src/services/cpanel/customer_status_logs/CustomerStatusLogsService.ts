import type { CustomerStatusLogsRequest } from './types/CustomerStatusLogsRequest'
import type { CustomerStatusLogsResponse } from './types/CustomerStatusLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerStatusLogsController } from './CustomerStatusLogsController'

export class CustomerStatusLogsService implements CustomerStatusLogsController {
  public async listCustomerStatusLogs(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusLogsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status_logs.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as CustomerStatusLogsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerStatusLog(app: FastifyInstance, input: CustomerStatusLogsRequest, request?: FastifyRequest): Promise<CustomerStatusLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status_logs.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CustomerStatusLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getCustomerStatusLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
