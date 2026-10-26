import type { CsatResponseRequest } from './types/CsatResponseRequest'
import type { CsatResponseUpdateRequest } from './types/CsatResponseUpdateRequest'
import type { CsatResponseResponse } from './types/CsatResponseResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { CsatResponseController } from './CsatResponseController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class CsatResponseService implements CsatResponseController {
      public async listCsatResponse(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CsatResponseResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_csat_response.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<CsatResponseResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createCsatResponse(app: FastifyInstance, input: CsatResponseRequest, request?: FastifyRequest): Promise<CsatResponseResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_csat_response.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<CsatResponseResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCsatResponseById(app: FastifyInstance, request?: FastifyRequest): Promise<CsatResponseResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_csat_response.schema(schema!);
      const { csat_response_id } = (request?.params ?? {}) as { csat_response_id?: string | number }
      if (csat_response_id === undefined || csat_response_id === '') throw httpError(400, 'csat_response_id is required')
      const row = await model.findByPk(csat_response_id)
      if (!row) {
        throw httpError(404, 'support_csat_response not found')
      }
      return toApiAttributes<CsatResponseResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCsatResponse(app: FastifyInstance, input: CsatResponseUpdateRequest, request?: FastifyRequest): Promise<CsatResponseResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_csat_response.schema(schema!);
      const { csat_response_id } = (request?.params ?? {}) as { csat_response_id?: string | number }
      if (csat_response_id === undefined || csat_response_id === '') throw httpError(400, 'csat_response_id is required')
      const row = await model.findByPk(csat_response_id)
      if (!row) {
        throw httpError(404, 'support_csat_response not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<CsatResponseResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCsatResponse(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_csat_response.schema(schema!);
      const { csat_response_id } = (request?.params ?? {}) as { csat_response_id?: string | number }
      if (csat_response_id === undefined || csat_response_id === '') throw httpError(400, 'csat_response_id is required')
      const deletedCount = await model.destroy({ where: { csatResponseId: csat_response_id } })
      if (deletedCount === 0) throw httpError(404, 'support_csat_response not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
