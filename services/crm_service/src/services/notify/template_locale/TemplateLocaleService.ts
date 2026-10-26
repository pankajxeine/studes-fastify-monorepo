import type { TemplateLocaleRequest } from './types/TemplateLocaleRequest'
import type { TemplateLocaleUpdateRequest } from './types/TemplateLocaleUpdateRequest'
import type { TemplateLocaleResponse } from './types/TemplateLocaleResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TemplateLocaleController } from './TemplateLocaleController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TemplateLocaleService implements TemplateLocaleController {
      public async listTemplateLocale(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TemplateLocaleResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_template_locale.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TemplateLocaleResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTemplateLocale(app: FastifyInstance, input: TemplateLocaleRequest, request?: FastifyRequest): Promise<TemplateLocaleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_template_locale.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TemplateLocaleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTemplateLocaleById(app: FastifyInstance, request?: FastifyRequest): Promise<TemplateLocaleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_template_locale.schema(schema!);
      const { template_locale_id } = (request?.params ?? {}) as { template_locale_id?: string | number }
      if (template_locale_id === undefined || template_locale_id === '') throw httpError(400, 'template_locale_id is required')
      const row = await model.findByPk(template_locale_id)
      if (!row) {
        throw httpError(404, 'notify_template_locale not found')
      }
      return toApiAttributes<TemplateLocaleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTemplateLocale(app: FastifyInstance, input: TemplateLocaleUpdateRequest, request?: FastifyRequest): Promise<TemplateLocaleResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_template_locale.schema(schema!);
      const { template_locale_id } = (request?.params ?? {}) as { template_locale_id?: string | number }
      if (template_locale_id === undefined || template_locale_id === '') throw httpError(400, 'template_locale_id is required')
      const row = await model.findByPk(template_locale_id)
      if (!row) {
        throw httpError(404, 'notify_template_locale not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TemplateLocaleResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTemplateLocale(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_template_locale.schema(schema!);
      const { template_locale_id } = (request?.params ?? {}) as { template_locale_id?: string | number }
      if (template_locale_id === undefined || template_locale_id === '') throw httpError(400, 'template_locale_id is required')
      const deletedCount = await model.destroy({ where: { templateLocaleId: template_locale_id } })
      if (deletedCount === 0) throw httpError(404, 'notify_template_locale not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
