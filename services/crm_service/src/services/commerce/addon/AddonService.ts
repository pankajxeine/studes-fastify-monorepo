import type { AddonRequest } from './types/AddonRequest'
import type { AddonUpdateRequest } from './types/AddonUpdateRequest'
import type { AddonResponse } from './types/AddonResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { AddonController } from './AddonController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class AddonService implements AddonController {
      public async listAddon(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AddonResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<AddonResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createAddon(app: FastifyInstance, input: AddonRequest, request?: FastifyRequest): Promise<AddonResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<AddonResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getAddonById(app: FastifyInstance, request?: FastifyRequest): Promise<AddonResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon.schema(schema!);
      const { addon_id } = (request?.params ?? {}) as { addon_id?: string | number }
      if (addon_id === undefined || addon_id === '') throw httpError(400, 'addon_id is required')
      const row = await model.findByPk(addon_id)
      if (!row) {
        throw httpError(404, 'commerce_addon not found')
      }
      return toApiAttributes<AddonResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateAddon(app: FastifyInstance, input: AddonUpdateRequest, request?: FastifyRequest): Promise<AddonResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon.schema(schema!);
      const { addon_id } = (request?.params ?? {}) as { addon_id?: string | number }
      if (addon_id === undefined || addon_id === '') throw httpError(400, 'addon_id is required')
      const row = await model.findByPk(addon_id)
      if (!row) {
        throw httpError(404, 'commerce_addon not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<AddonResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteAddon(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon.schema(schema!);
      const { addon_id } = (request?.params ?? {}) as { addon_id?: string | number }
      if (addon_id === undefined || addon_id === '') throw httpError(400, 'addon_id is required')
      const deletedCount = await model.destroy({ where: { addonId: addon_id } })
      if (deletedCount === 0) throw httpError(404, 'commerce_addon not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
