import type { TaxRateRequest } from './types/TaxRateRequest'
import type { TaxRateUpdateRequest } from './types/TaxRateUpdateRequest'
import type { TaxRateResponse } from './types/TaxRateResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TaxRateController } from './TaxRateController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TaxRateService implements TaxRateController {
      public async listTaxRate(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TaxRateResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_tax_rate.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TaxRateResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTaxRate(app: FastifyInstance, input: TaxRateRequest, request?: FastifyRequest): Promise<TaxRateResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_tax_rate.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TaxRateResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTaxRateById(app: FastifyInstance, request?: FastifyRequest): Promise<TaxRateResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_tax_rate.schema(schema!);
      const { tax_rate_id } = (request?.params ?? {}) as { tax_rate_id?: string | number }
      if (tax_rate_id === undefined || tax_rate_id === '') throw httpError(400, 'tax_rate_id is required')
      const row = await model.findByPk(tax_rate_id)
      if (!row) {
        throw httpError(404, 'platform_tax_rate not found')
      }
      return toApiAttributes<TaxRateResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTaxRate(app: FastifyInstance, input: TaxRateUpdateRequest, request?: FastifyRequest): Promise<TaxRateResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_tax_rate.schema(schema!);
      const { tax_rate_id } = (request?.params ?? {}) as { tax_rate_id?: string | number }
      if (tax_rate_id === undefined || tax_rate_id === '') throw httpError(400, 'tax_rate_id is required')
      const row = await model.findByPk(tax_rate_id)
      if (!row) {
        throw httpError(404, 'platform_tax_rate not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TaxRateResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTaxRate(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_tax_rate.schema(schema!);
      const { tax_rate_id } = (request?.params ?? {}) as { tax_rate_id?: string | number }
      if (tax_rate_id === undefined || tax_rate_id === '') throw httpError(400, 'tax_rate_id is required')
      const deletedCount = await model.destroy({ where: { taxRateId: tax_rate_id } })
      if (deletedCount === 0) throw httpError(404, 'platform_tax_rate not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
