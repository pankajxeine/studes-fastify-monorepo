import type { SettingRequest } from './types/SettingRequest'
import type { SettingUpdateRequest } from './types/SettingUpdateRequest'
import type { SettingResponse } from './types/SettingResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { SettingController } from './SettingController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class SettingService implements SettingController {
      public async listSetting(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SettingResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_setting.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<SettingResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createSetting(app: FastifyInstance, input: SettingRequest, request?: FastifyRequest): Promise<SettingResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_setting.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<SettingResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSettingById(app: FastifyInstance, request?: FastifyRequest): Promise<SettingResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_setting.schema(schema!);
      const { setting_id } = (request?.params ?? {}) as { setting_id?: string | number }
      if (setting_id === undefined || setting_id === '') throw httpError(400, 'setting_id is required')
      const row = await model.findByPk(setting_id)
      if (!row) {
        throw httpError(404, 'platform_setting not found')
      }
      return toApiAttributes<SettingResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSetting(app: FastifyInstance, input: SettingUpdateRequest, request?: FastifyRequest): Promise<SettingResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_setting.schema(schema!);
      const { setting_id } = (request?.params ?? {}) as { setting_id?: string | number }
      if (setting_id === undefined || setting_id === '') throw httpError(400, 'setting_id is required')
      const row = await model.findByPk(setting_id)
      if (!row) {
        throw httpError(404, 'platform_setting not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<SettingResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSetting(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_setting.schema(schema!);
      const { setting_id } = (request?.params ?? {}) as { setting_id?: string | number }
      if (setting_id === undefined || setting_id === '') throw httpError(400, 'setting_id is required')
      const deletedCount = await model.destroy({ where: { settingId: setting_id } })
      if (deletedCount === 0) throw httpError(404, 'platform_setting not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
