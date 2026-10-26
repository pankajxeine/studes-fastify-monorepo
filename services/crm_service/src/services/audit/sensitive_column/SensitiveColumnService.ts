import type { SensitiveColumnRequest } from './types/SensitiveColumnRequest'
import type { SensitiveColumnUpdateRequest } from './types/SensitiveColumnUpdateRequest'
import type { SensitiveColumnResponse } from './types/SensitiveColumnResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { SensitiveColumnController } from './SensitiveColumnController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class SensitiveColumnService implements SensitiveColumnController {
      public async listSensitiveColumn(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SensitiveColumnResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_sensitive_column.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<SensitiveColumnResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createSensitiveColumn(app: FastifyInstance, input: SensitiveColumnRequest, request?: FastifyRequest): Promise<SensitiveColumnResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_sensitive_column.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<SensitiveColumnResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSensitiveColumnById(app: FastifyInstance, request?: FastifyRequest): Promise<SensitiveColumnResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_sensitive_column.schema(schema!);
      const { sensitive_column_id } = (request?.params ?? {}) as { sensitive_column_id?: string | number }
      if (sensitive_column_id === undefined || sensitive_column_id === '') throw httpError(400, 'sensitive_column_id is required')
      const row = await model.findByPk(sensitive_column_id)
      if (!row) {
        throw httpError(404, 'audit_sensitive_column not found')
      }
      return toApiAttributes<SensitiveColumnResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSensitiveColumn(app: FastifyInstance, input: SensitiveColumnUpdateRequest, request?: FastifyRequest): Promise<SensitiveColumnResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_sensitive_column.schema(schema!);
      const { sensitive_column_id } = (request?.params ?? {}) as { sensitive_column_id?: string | number }
      if (sensitive_column_id === undefined || sensitive_column_id === '') throw httpError(400, 'sensitive_column_id is required')
      const row = await model.findByPk(sensitive_column_id)
      if (!row) {
        throw httpError(404, 'audit_sensitive_column not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<SensitiveColumnResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSensitiveColumn(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.audit_sensitive_column.schema(schema!);
      const { sensitive_column_id } = (request?.params ?? {}) as { sensitive_column_id?: string | number }
      if (sensitive_column_id === undefined || sensitive_column_id === '') throw httpError(400, 'sensitive_column_id is required')
      const deletedCount = await model.destroy({ where: { sensitiveColumnId: sensitive_column_id } })
      if (deletedCount === 0) throw httpError(404, 'audit_sensitive_column not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
