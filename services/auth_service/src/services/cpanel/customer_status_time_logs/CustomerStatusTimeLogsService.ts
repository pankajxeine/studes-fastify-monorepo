import type { CustomerStatusTimeLogsRequest } from './types/CustomerStatusTimeLogsRequest'
import type { CustomerStatusTimeLogsResponse } from './types/CustomerStatusTimeLogsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerStatusTimeLogsController } from './CustomerStatusTimeLogsController'

export class CustomerStatusTimeLogsService implements CustomerStatusTimeLogsController {
  public async listCustomerStatusTimeLogs(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusTimeLogsResponse[]> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status_time_logs.schema(schema!)
      const rows = await model.findAll()
      return rows.map((row) => row.get({ plain: true })) as CustomerStatusTimeLogsResponse[]
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async createCustomerStatusTimeLog(app: FastifyInstance, input: CustomerStatusTimeLogsRequest, request?: FastifyRequest): Promise<CustomerStatusTimeLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status_time_logs.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CustomerStatusTimeLogsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

  public async getCustomerStatusTimeLogsById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerStatusTimeLogsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status_time_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status_time_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
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
      const schema = request?.cpanelBbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_status_time_logs.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
