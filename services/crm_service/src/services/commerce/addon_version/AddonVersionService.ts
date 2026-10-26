import type { AddonVersionRequest } from './types/AddonVersionRequest'
import type { AddonVersionUpdateRequest } from './types/AddonVersionUpdateRequest'
import type { AddonVersionResponse } from './types/AddonVersionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { AddonVersionController } from './AddonVersionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class AddonVersionService implements AddonVersionController {
      public async listAddonVersion(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<AddonVersionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon_version.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<AddonVersionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createAddonVersion(app: FastifyInstance, input: AddonVersionRequest, request?: FastifyRequest): Promise<AddonVersionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon_version.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<AddonVersionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getAddonVersionById(app: FastifyInstance, request?: FastifyRequest): Promise<AddonVersionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon_version.schema(schema!);
      const { addon_version_id } = (request?.params ?? {}) as { addon_version_id?: string | number }
      if (addon_version_id === undefined || addon_version_id === '') throw httpError(400, 'addon_version_id is required')
      const row = await model.findByPk(addon_version_id)
      if (!row) {
        throw httpError(404, 'commerce_addon_version not found')
      }
      return toApiAttributes<AddonVersionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateAddonVersion(app: FastifyInstance, input: AddonVersionUpdateRequest, request?: FastifyRequest): Promise<AddonVersionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon_version.schema(schema!);
      const { addon_version_id } = (request?.params ?? {}) as { addon_version_id?: string | number }
      if (addon_version_id === undefined || addon_version_id === '') throw httpError(400, 'addon_version_id is required')
      const row = await model.findByPk(addon_version_id)
      if (!row) {
        throw httpError(404, 'commerce_addon_version not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<AddonVersionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteAddonVersion(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_addon_version.schema(schema!);
      const { addon_version_id } = (request?.params ?? {}) as { addon_version_id?: string | number }
      if (addon_version_id === undefined || addon_version_id === '') throw httpError(400, 'addon_version_id is required')
      const deletedCount = await model.destroy({ where: { addonVersionId: addon_version_id } })
      if (deletedCount === 0) throw httpError(404, 'commerce_addon_version not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
