import type { ShippingMethodsRequest } from './types/ShippingMethodsRequest'
import type { ShippingMethodsResponse } from './types/ShippingMethodsResponse'
import { FastifyInstance, FastifyRequest } from 'fastify'
import type { ShippingMethodsController, ListItem, PaginatedResponse } from './ShippingMethodsController'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils';

export class ShippingMethodsService implements ShippingMethodsController {
      public async listShippingMethods(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ShippingMethodsResponse[]>>> {
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
      const { count, rows } = await models.shipping_methods.schema(schema!).findAndCountAll({
        limit,
        offset: (page - 1) * limit,
      })
      return {
        data: rows.map((row) => row.get({ plain: true })) as ListItem<ShippingMethodsResponse[]>[],
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

      public async createShippingMethod(app: FastifyInstance, input: ShippingMethodsRequest, request?: FastifyRequest): Promise<ShippingMethodsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const row = await models.shipping_methods.schema(schema!).create(input as any)
      return row.get({ plain: true }) as ShippingMethodsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getShippingMethodsById(app: FastifyInstance, request?: FastifyRequest): Promise<ShippingMethodsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.shipping_methods.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('shipping_methods not found')
      }
      return row.get({ plain: true }) as ShippingMethodsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateShippingMethod(app: FastifyInstance, input: ShippingMethodsRequest, request?: FastifyRequest): Promise<ShippingMethodsResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      const row = await models.shipping_methods.schema(schema!).findByPk(id)
      if (!row) {
        throw new Error('shipping_methods not found')
      }
      await row.update(input as any)
      return row.get({ plain: true }) as ShippingMethodsResponse
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteShippingMethod(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.cpanelDbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.cpanelModels;
      verifyDbModel(models);
      const { id } = (request?.params ?? {}) as { id?: string | number }
      await models.shipping_methods.schema(schema!).destroy({ where: { id } })
      return undefined as void
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
