import type { CreditNoteRequest } from './types/CreditNoteRequest'
import type { CreditNoteUpdateRequest } from './types/CreditNoteUpdateRequest'
import type { CreditNoteResponse } from './types/CreditNoteResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { CreditNoteController } from './CreditNoteController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class CreditNoteService implements CreditNoteController {
      public async listCreditNote(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CreditNoteResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_credit_note.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<CreditNoteResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createCreditNote(app: FastifyInstance, input: CreditNoteRequest, request?: FastifyRequest): Promise<CreditNoteResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_credit_note.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<CreditNoteResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCreditNoteById(app: FastifyInstance, request?: FastifyRequest): Promise<CreditNoteResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_credit_note.schema(schema!);
      const { credit_note_id } = (request?.params ?? {}) as { credit_note_id?: string | number }
      if (credit_note_id === undefined || credit_note_id === '') throw httpError(400, 'credit_note_id is required')
      const row = await model.findByPk(credit_note_id)
      if (!row) {
        throw httpError(404, 'billing_credit_note not found')
      }
      return toApiAttributes<CreditNoteResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCreditNote(app: FastifyInstance, input: CreditNoteUpdateRequest, request?: FastifyRequest): Promise<CreditNoteResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_credit_note.schema(schema!);
      const { credit_note_id } = (request?.params ?? {}) as { credit_note_id?: string | number }
      if (credit_note_id === undefined || credit_note_id === '') throw httpError(400, 'credit_note_id is required')
      const row = await model.findByPk(credit_note_id)
      if (!row) {
        throw httpError(404, 'billing_credit_note not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<CreditNoteResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCreditNote(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_credit_note.schema(schema!);
      const { credit_note_id } = (request?.params ?? {}) as { credit_note_id?: string | number }
      if (credit_note_id === undefined || credit_note_id === '') throw httpError(400, 'credit_note_id is required')
      const deletedCount = await model.destroy({ where: { creditNoteId: credit_note_id } })
      if (deletedCount === 0) throw httpError(404, 'billing_credit_note not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
