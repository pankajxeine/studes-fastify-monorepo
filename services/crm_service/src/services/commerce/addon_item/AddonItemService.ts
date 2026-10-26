import type { AddonItemRequest } from './types/AddonItemRequest'
import type { AddonItemUpdateRequest } from './types/AddonItemUpdateRequest'
import type { AddonItemResponse } from './types/AddonItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { AddonItemController } from './AddonItemController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class AddonItemService implements AddonItemController {
      public async listAddonItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AddonItemResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon_item.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<AddonItemResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createAddonItem(app: FastifyInstance, input: AddonItemRequest, request?: FastifyRequest): Promise<AddonItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon_item.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<AddonItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getAddonItemById(app: FastifyInstance, request?: FastifyRequest): Promise<AddonItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon_item.schema(schema!);
      const { addon_item_id } = (request?.params ?? {}) as { addon_item_id?: string | number }
      if (addon_item_id === undefined || addon_item_id === '') throw httpError(400, 'addon_item_id is required')
      const row = await model.findByPk(addon_item_id)
      if (!row) {
        throw httpError(404, 'commerce_addon_item not found')
      }
      return toApiAttributes<AddonItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateAddonItem(app: FastifyInstance, input: AddonItemUpdateRequest, request?: FastifyRequest): Promise<AddonItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon_item.schema(schema!);
      const { addon_item_id } = (request?.params ?? {}) as { addon_item_id?: string | number }
      if (addon_item_id === undefined || addon_item_id === '') throw httpError(400, 'addon_item_id is required')
      const row = await model.findByPk(addon_item_id)
      if (!row) {
        throw httpError(404, 'commerce_addon_item not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<AddonItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteAddonItem(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon_item.schema(schema!);
      const { addon_item_id } = (request?.params ?? {}) as { addon_item_id?: string | number }
      if (addon_item_id === undefined || addon_item_id === '') throw httpError(400, 'addon_item_id is required')
      const deletedCount = await model.destroy({ where: { addonItemId: addon_item_id } })
      if (deletedCount === 0) throw httpError(404, 'commerce_addon_item not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
