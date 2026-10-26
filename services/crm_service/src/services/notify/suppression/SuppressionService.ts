import type { SuppressionRequest } from './types/SuppressionRequest'
import type { SuppressionUpdateRequest } from './types/SuppressionUpdateRequest'
import type { SuppressionResponse } from './types/SuppressionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { SuppressionController } from './SuppressionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class SuppressionService implements SuppressionController {
      public async listSuppression(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SuppressionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_suppression.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<SuppressionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createSuppression(app: FastifyInstance, input: SuppressionRequest, request?: FastifyRequest): Promise<SuppressionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_suppression.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<SuppressionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSuppressionById(app: FastifyInstance, request?: FastifyRequest): Promise<SuppressionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_suppression.schema(schema!);
      const { suppression_id } = (request?.params ?? {}) as { suppression_id?: string | number }
      if (suppression_id === undefined || suppression_id === '') throw httpError(400, 'suppression_id is required')
      const row = await model.findByPk(suppression_id)
      if (!row) {
        throw httpError(404, 'notify_suppression not found')
      }
      return toApiAttributes<SuppressionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSuppression(app: FastifyInstance, input: SuppressionUpdateRequest, request?: FastifyRequest): Promise<SuppressionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_suppression.schema(schema!);
      const { suppression_id } = (request?.params ?? {}) as { suppression_id?: string | number }
      if (suppression_id === undefined || suppression_id === '') throw httpError(400, 'suppression_id is required')
      const row = await model.findByPk(suppression_id)
      if (!row) {
        throw httpError(404, 'notify_suppression not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<SuppressionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSuppression(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.notify_suppression.schema(schema!);
      const { suppression_id } = (request?.params ?? {}) as { suppression_id?: string | number }
      if (suppression_id === undefined || suppression_id === '') throw httpError(400, 'suppression_id is required')
      const deletedCount = await model.destroy({ where: { suppressionId: suppression_id } })
      if (deletedCount === 0) throw httpError(404, 'notify_suppression not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
