import type { IndustryRequest } from './types/IndustryRequest'
import type { IndustryUpdateRequest } from './types/IndustryUpdateRequest'
import type { IndustryResponse } from './types/IndustryResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { IndustryController } from './IndustryController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class IndustryService implements IndustryController {
      public async listIndustry(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<IndustryResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_industry.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<IndustryResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createIndustry(app: FastifyInstance, input: IndustryRequest, request?: FastifyRequest): Promise<IndustryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_industry.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<IndustryResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getIndustryById(app: FastifyInstance, request?: FastifyRequest): Promise<IndustryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_industry.schema(schema!);
      const { industry_id } = (request?.params ?? {}) as { industry_id?: string | number }
      if (industry_id === undefined || industry_id === '') throw httpError(400, 'industry_id is required')
      const row = await model.findByPk(industry_id)
      if (!row) {
        throw httpError(404, 'platform_industry not found')
      }
      return toApiAttributes<IndustryResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateIndustry(app: FastifyInstance, input: IndustryUpdateRequest, request?: FastifyRequest): Promise<IndustryResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_industry.schema(schema!);
      const { industry_id } = (request?.params ?? {}) as { industry_id?: string | number }
      if (industry_id === undefined || industry_id === '') throw httpError(400, 'industry_id is required')
      const row = await model.findByPk(industry_id)
      if (!row) {
        throw httpError(404, 'platform_industry not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<IndustryResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteIndustry(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_industry.schema(schema!);
      const { industry_id } = (request?.params ?? {}) as { industry_id?: string | number }
      if (industry_id === undefined || industry_id === '') throw httpError(400, 'industry_id is required')
      const deletedCount = await model.destroy({ where: { industryId: industry_id } })
      if (deletedCount === 0) throw httpError(404, 'platform_industry not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
