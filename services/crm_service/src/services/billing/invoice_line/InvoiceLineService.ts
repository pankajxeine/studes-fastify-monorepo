import type { InvoiceLineRequest } from './types/InvoiceLineRequest'
import type { InvoiceLineUpdateRequest } from './types/InvoiceLineUpdateRequest'
import type { InvoiceLineResponse } from './types/InvoiceLineResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { InvoiceLineController } from './InvoiceLineController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class InvoiceLineService implements InvoiceLineController {
      public async listInvoiceLine(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<InvoiceLineResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_invoice_line.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<InvoiceLineResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createInvoiceLine(app: FastifyInstance, input: InvoiceLineRequest, request?: FastifyRequest): Promise<InvoiceLineResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_invoice_line.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<InvoiceLineResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getInvoiceLineById(app: FastifyInstance, request?: FastifyRequest): Promise<InvoiceLineResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_invoice_line.schema(schema!);
      const { invoice_line_id } = (request?.params ?? {}) as { invoice_line_id?: string | number }
      if (invoice_line_id === undefined || invoice_line_id === '') throw httpError(400, 'invoice_line_id is required')
      const row = await model.findByPk(invoice_line_id)
      if (!row) {
        throw httpError(404, 'billing_invoice_line not found')
      }
      return toApiAttributes<InvoiceLineResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateInvoiceLine(app: FastifyInstance, input: InvoiceLineUpdateRequest, request?: FastifyRequest): Promise<InvoiceLineResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_invoice_line.schema(schema!);
      const { invoice_line_id } = (request?.params ?? {}) as { invoice_line_id?: string | number }
      if (invoice_line_id === undefined || invoice_line_id === '') throw httpError(400, 'invoice_line_id is required')
      const row = await model.findByPk(invoice_line_id)
      if (!row) {
        throw httpError(404, 'billing_invoice_line not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<InvoiceLineResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteInvoiceLine(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_invoice_line.schema(schema!);
      const { invoice_line_id } = (request?.params ?? {}) as { invoice_line_id?: string | number }
      if (invoice_line_id === undefined || invoice_line_id === '') throw httpError(400, 'invoice_line_id is required')
      const deletedCount = await model.destroy({ where: { invoiceLineId: invoice_line_id } })
      if (deletedCount === 0) throw httpError(404, 'billing_invoice_line not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
