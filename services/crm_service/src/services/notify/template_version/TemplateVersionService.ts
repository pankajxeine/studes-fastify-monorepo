import type { TemplateVersionRequest } from './types/TemplateVersionRequest'
import type { TemplateVersionUpdateRequest } from './types/TemplateVersionUpdateRequest'
import type { TemplateVersionResponse } from './types/TemplateVersionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TemplateVersionController } from './TemplateVersionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TemplateVersionService implements TemplateVersionController {
      public async listTemplateVersion(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TemplateVersionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_template_version.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TemplateVersionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTemplateVersion(app: FastifyInstance, input: TemplateVersionRequest, request?: FastifyRequest): Promise<TemplateVersionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_template_version.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TemplateVersionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTemplateVersionById(app: FastifyInstance, request?: FastifyRequest): Promise<TemplateVersionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_template_version.schema(schema!);
      const { template_version_id } = (request?.params ?? {}) as { template_version_id?: string | number }
      if (template_version_id === undefined || template_version_id === '') throw httpError(400, 'template_version_id is required')
      const row = await model.findByPk(template_version_id)
      if (!row) {
        throw httpError(404, 'notify_template_version not found')
      }
      return toApiAttributes<TemplateVersionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTemplateVersion(app: FastifyInstance, input: TemplateVersionUpdateRequest, request?: FastifyRequest): Promise<TemplateVersionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_template_version.schema(schema!);
      const { template_version_id } = (request?.params ?? {}) as { template_version_id?: string | number }
      if (template_version_id === undefined || template_version_id === '') throw httpError(400, 'template_version_id is required')
      const row = await model.findByPk(template_version_id)
      if (!row) {
        throw httpError(404, 'notify_template_version not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TemplateVersionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTemplateVersion(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_template_version.schema(schema!);
      const { template_version_id } = (request?.params ?? {}) as { template_version_id?: string | number }
      if (template_version_id === undefined || template_version_id === '') throw httpError(400, 'template_version_id is required')
      const deletedCount = await model.destroy({ where: { templateVersionId: template_version_id } })
      if (deletedCount === 0) throw httpError(404, 'notify_template_version not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
