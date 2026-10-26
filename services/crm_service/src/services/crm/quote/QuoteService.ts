import type { QuoteRequest } from './types/QuoteRequest'
import type { QuoteUpdateRequest } from './types/QuoteUpdateRequest'
import type { QuoteResponse } from './types/QuoteResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { QuoteController } from './QuoteController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class QuoteService implements QuoteController {
      public async listQuote(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<QuoteResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_quote.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<QuoteResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createQuote(app: FastifyInstance, input: QuoteRequest, request?: FastifyRequest): Promise<QuoteResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_quote.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<QuoteResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getQuoteById(app: FastifyInstance, request?: FastifyRequest): Promise<QuoteResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_quote.schema(schema!);
      const { quote_id } = (request?.params ?? {}) as { quote_id?: string | number }
      if (quote_id === undefined || quote_id === '') throw httpError(400, 'quote_id is required')
      const row = await model.findByPk(quote_id)
      if (!row) {
        throw httpError(404, 'crm_quote not found')
      }
      return toApiAttributes<QuoteResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateQuote(app: FastifyInstance, input: QuoteUpdateRequest, request?: FastifyRequest): Promise<QuoteResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_quote.schema(schema!);
      const { quote_id } = (request?.params ?? {}) as { quote_id?: string | number }
      if (quote_id === undefined || quote_id === '') throw httpError(400, 'quote_id is required')
      const row = await model.findByPk(quote_id)
      if (!row) {
        throw httpError(404, 'crm_quote not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<QuoteResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteQuote(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_quote.schema(schema!);
      const { quote_id } = (request?.params ?? {}) as { quote_id?: string | number }
      if (quote_id === undefined || quote_id === '') throw httpError(400, 'quote_id is required')
      const deletedCount = await model.destroy({ where: { quoteId: quote_id } })
      if (deletedCount === 0) throw httpError(404, 'crm_quote not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
