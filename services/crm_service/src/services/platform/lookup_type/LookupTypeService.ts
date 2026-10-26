import type { LookupTypeRequest } from './types/LookupTypeRequest'
import type { LookupTypeUpdateRequest } from './types/LookupTypeUpdateRequest'
import type { LookupTypeResponse } from './types/LookupTypeResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { LookupTypeController } from './LookupTypeController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class LookupTypeService implements LookupTypeController {
      public async listLookupType(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<LookupTypeResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_lookup_type.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<LookupTypeResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createLookupType(app: FastifyInstance, input: LookupTypeRequest, request?: FastifyRequest): Promise<LookupTypeResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_lookup_type.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<LookupTypeResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getLookupTypeById(app: FastifyInstance, request?: FastifyRequest): Promise<LookupTypeResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_lookup_type.schema(schema!);
      const { lookup_type_id } = (request?.params ?? {}) as { lookup_type_id?: string | number }
      if (lookup_type_id === undefined || lookup_type_id === '') throw httpError(400, 'lookup_type_id is required')
      const row = await model.findByPk(lookup_type_id)
      if (!row) {
        throw httpError(404, 'platform_lookup_type not found')
      }
      return toApiAttributes<LookupTypeResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateLookupType(app: FastifyInstance, input: LookupTypeUpdateRequest, request?: FastifyRequest): Promise<LookupTypeResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_lookup_type.schema(schema!);
      const { lookup_type_id } = (request?.params ?? {}) as { lookup_type_id?: string | number }
      if (lookup_type_id === undefined || lookup_type_id === '') throw httpError(400, 'lookup_type_id is required')
      const row = await model.findByPk(lookup_type_id)
      if (!row) {
        throw httpError(404, 'platform_lookup_type not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<LookupTypeResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteLookupType(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_lookup_type.schema(schema!);
      const { lookup_type_id } = (request?.params ?? {}) as { lookup_type_id?: string | number }
      if (lookup_type_id === undefined || lookup_type_id === '') throw httpError(400, 'lookup_type_id is required')
      const deletedCount = await model.destroy({ where: { lookupTypeId: lookup_type_id } })
      if (deletedCount === 0) throw httpError(404, 'platform_lookup_type not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
