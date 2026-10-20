import type { DevicesRequest } from './types/DevicesRequest'
import type { DevicesResponse } from './types/DevicesResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { DevicesController, ListItem, PaginatedResponse } from './DevicesController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class DevicesService implements DevicesController {
      public async listDevices(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DevicesResponse[]>>> {
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
      const { count, rows } = await models.devices.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<DevicesResponse[]>[],
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

      public async createDevice(app: FastifyInstance, input: DevicesRequest, request?: FastifyRequest): Promise<DevicesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.devices.schema(schema!).create(input as any)
      return row.get({ plain: true }) as DevicesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getDevicesById(app: FastifyInstance, request?: FastifyRequest): Promise<DevicesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.devices.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('devices not found')
      }
      return row.get({ plain: true }) as DevicesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateDevice(app: FastifyInstance, input: DevicesRequest, request?: FastifyRequest): Promise<DevicesResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.devices.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('devices not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as DevicesResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteDevice(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.devices.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
