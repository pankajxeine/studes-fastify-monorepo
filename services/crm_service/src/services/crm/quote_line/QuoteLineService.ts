import type { QuoteLineRequest } from './types/QuoteLineRequest'
import type { QuoteLineUpdateRequest } from './types/QuoteLineUpdateRequest'
import type { QuoteLineResponse } from './types/QuoteLineResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { QuoteLineController } from './QuoteLineController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class QuoteLineService implements QuoteLineController {
      public async listQuoteLine(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<QuoteLineResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_quote_line.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<QuoteLineResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createQuoteLine(app: FastifyInstance, input: QuoteLineRequest, request?: FastifyRequest): Promise<QuoteLineResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_quote_line.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<QuoteLineResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getQuoteLineById(app: FastifyInstance, request?: FastifyRequest): Promise<QuoteLineResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_quote_line.schema(schema!);
      const { quote_line_id } = (request?.params ?? {}) as { quote_line_id?: string | number }
      if (quote_line_id === undefined || quote_line_id === '') throw httpError(400, 'quote_line_id is required')
      const row = await model.findByPk(quote_line_id)
      if (!row) {
        throw httpError(404, 'crm_quote_line not found')
      }
      return toApiAttributes<QuoteLineResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateQuoteLine(app: FastifyInstance, input: QuoteLineUpdateRequest, request?: FastifyRequest): Promise<QuoteLineResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_quote_line.schema(schema!);
      const { quote_line_id } = (request?.params ?? {}) as { quote_line_id?: string | number }
      if (quote_line_id === undefined || quote_line_id === '') throw httpError(400, 'quote_line_id is required')
      const row = await model.findByPk(quote_line_id)
      if (!row) {
        throw httpError(404, 'crm_quote_line not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<QuoteLineResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteQuoteLine(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_quote_line.schema(schema!);
      const { quote_line_id } = (request?.params ?? {}) as { quote_line_id?: string | number }
      if (quote_line_id === undefined || quote_line_id === '') throw httpError(400, 'quote_line_id is required')
      const deletedCount = await model.destroy({ where: { quoteLineId: quote_line_id } })
      if (deletedCount === 0) throw httpError(404, 'crm_quote_line not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
