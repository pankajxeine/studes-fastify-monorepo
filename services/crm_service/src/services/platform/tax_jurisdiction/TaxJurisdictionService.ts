import type { TaxJurisdictionRequest } from './types/TaxJurisdictionRequest'
import type { TaxJurisdictionUpdateRequest } from './types/TaxJurisdictionUpdateRequest'
import type { TaxJurisdictionResponse } from './types/TaxJurisdictionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { TaxJurisdictionController } from './TaxJurisdictionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class TaxJurisdictionService implements TaxJurisdictionController {
      public async listTaxJurisdiction(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<TaxJurisdictionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_tax_jurisdiction.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<TaxJurisdictionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createTaxJurisdiction(app: FastifyInstance, input: TaxJurisdictionRequest, request?: FastifyRequest): Promise<TaxJurisdictionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_tax_jurisdiction.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<TaxJurisdictionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getTaxJurisdictionById(app: FastifyInstance, request?: FastifyRequest): Promise<TaxJurisdictionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_tax_jurisdiction.schema(schema!);
      const { tax_jurisdiction_id } = (request?.params ?? {}) as { tax_jurisdiction_id?: string | number }
      if (tax_jurisdiction_id === undefined || tax_jurisdiction_id === '') throw httpError(400, 'tax_jurisdiction_id is required')
      const row = await model.findByPk(tax_jurisdiction_id)
      if (!row) {
        throw httpError(404, 'platform_tax_jurisdiction not found')
      }
      return toApiAttributes<TaxJurisdictionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateTaxJurisdiction(app: FastifyInstance, input: TaxJurisdictionUpdateRequest, request?: FastifyRequest): Promise<TaxJurisdictionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_tax_jurisdiction.schema(schema!);
      const { tax_jurisdiction_id } = (request?.params ?? {}) as { tax_jurisdiction_id?: string | number }
      if (tax_jurisdiction_id === undefined || tax_jurisdiction_id === '') throw httpError(400, 'tax_jurisdiction_id is required')
      const row = await model.findByPk(tax_jurisdiction_id)
      if (!row) {
        throw httpError(404, 'platform_tax_jurisdiction not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<TaxJurisdictionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteTaxJurisdiction(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.platform_tax_jurisdiction.schema(schema!);
      const { tax_jurisdiction_id } = (request?.params ?? {}) as { tax_jurisdiction_id?: string | number }
      if (tax_jurisdiction_id === undefined || tax_jurisdiction_id === '') throw httpError(400, 'tax_jurisdiction_id is required')
      const deletedCount = await model.destroy({ where: { taxJurisdictionId: tax_jurisdiction_id } })
      if (deletedCount === 0) throw httpError(404, 'platform_tax_jurisdiction not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
