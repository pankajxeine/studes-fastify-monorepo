import type { LookupValueRequest } from './types/LookupValueRequest'
import type { LookupValueUpdateRequest } from './types/LookupValueUpdateRequest'
import type { LookupValueResponse } from './types/LookupValueResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { LookupValueController } from './LookupValueController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class LookupValueService implements LookupValueController {
      public async listLookupValue(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LookupValueResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_lookup_value.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<LookupValueResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createLookupValue(app: FastifyInstance, input: LookupValueRequest, request?: FastifyRequest): Promise<LookupValueResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_lookup_value.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<LookupValueResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getLookupValueById(app: FastifyInstance, request?: FastifyRequest): Promise<LookupValueResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_lookup_value.schema(schema!);
      const { lookup_value_id } = (request?.params ?? {}) as { lookup_value_id?: string | number }
      if (lookup_value_id === undefined || lookup_value_id === '') throw httpError(400, 'lookup_value_id is required')
      const row = await model.findByPk(lookup_value_id)
      if (!row) {
        throw httpError(404, 'platform_lookup_value not found')
      }
      return toApiAttributes<LookupValueResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateLookupValue(app: FastifyInstance, input: LookupValueUpdateRequest, request?: FastifyRequest): Promise<LookupValueResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_lookup_value.schema(schema!);
      const { lookup_value_id } = (request?.params ?? {}) as { lookup_value_id?: string | number }
      if (lookup_value_id === undefined || lookup_value_id === '') throw httpError(400, 'lookup_value_id is required')
      const row = await model.findByPk(lookup_value_id)
      if (!row) {
        throw httpError(404, 'platform_lookup_value not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<LookupValueResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteLookupValue(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_lookup_value.schema(schema!);
      const { lookup_value_id } = (request?.params ?? {}) as { lookup_value_id?: string | number }
      if (lookup_value_id === undefined || lookup_value_id === '') throw httpError(400, 'lookup_value_id is required')
      const deletedCount = await model.destroy({ where: { lookupValueId: lookup_value_id } })
      if (deletedCount === 0) throw httpError(404, 'platform_lookup_value not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
