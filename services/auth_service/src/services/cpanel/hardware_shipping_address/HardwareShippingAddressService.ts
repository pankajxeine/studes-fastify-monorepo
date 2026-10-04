import type { HardwareShippingAddressRequest } from './types/HardwareShippingAddressRequest'
import type { HardwareShippingAddressResponse } from './types/HardwareShippingAddressResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { HardwareShippingAddressController, ListItem, PaginatedResponse } from './HardwareShippingAddressController'

export class HardwareShippingAddressService implements HardwareShippingAddressController {
      public async listHardwareShippingAddress(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<HardwareShippingAddressResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.hardware_shipping_address.schema(schema!)
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
        data: rows.map((row) => row.get({ plain: true })) as ListItem<HardwareShippingAddressResponse[]>[],
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

      public async createHardwareShippingAddres(app: FastifyInstance, input: HardwareShippingAddressRequest, request?: FastifyRequest): Promise<HardwareShippingAddressResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.hardware_shipping_address.schema(schema!)
      const row = await model.create(input as any)
      return row.get({ plain: true }) as HardwareShippingAddressResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getHardwareShippingAddressById(app: FastifyInstance, request?: FastifyRequest): Promise<HardwareShippingAddressResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.hardware_shipping_address.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('hardware_shipping_address not found')
      }
      return row.get({ plain: true }) as HardwareShippingAddressResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateHardwareShippingAddres(app: FastifyInstance, input: HardwareShippingAddressRequest, request?: FastifyRequest): Promise<HardwareShippingAddressResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.hardware_shipping_address.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await model.findByPk(id)
      if (!row) {
        throw new Error('hardware_shipping_address not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as HardwareShippingAddressResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteHardwareShippingAddres(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      // bind model to tenant schema
      const model = app.cpanelModels.hardware_shipping_address.schema(schema!)
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await model.destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
