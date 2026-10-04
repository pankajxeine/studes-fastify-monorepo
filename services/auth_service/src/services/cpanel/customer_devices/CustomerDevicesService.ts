import type { CustomerDevicesRequest } from './types/CustomerDevicesRequest'
import type { CustomerDevicesResponse } from './types/CustomerDevicesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { CustomerDevicesController, ListItem, PaginatedResponse } from './CustomerDevicesController'

export class CustomerDevicesService implements CustomerDevicesController {
      public async listCustomerDevices(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CustomerDevicesResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_devices.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<CustomerDevicesResponse[]>[],
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

      public async createCustomerDevice(app: FastifyInstance, input: CustomerDevicesRequest, request?: FastifyRequest): Promise<CustomerDevicesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_devices.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as CustomerDevicesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCustomerDevicesById(app: FastifyInstance, request?: FastifyRequest): Promise<CustomerDevicesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_devices.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_devices not found')
      }
      return row.get({ plain: true }) as CustomerDevicesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCustomerDevice(app: FastifyInstance, input: CustomerDevicesRequest, request?: FastifyRequest): Promise<CustomerDevicesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_devices.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('customer_devices not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as CustomerDevicesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCustomerDevice(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.customer_devices.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
