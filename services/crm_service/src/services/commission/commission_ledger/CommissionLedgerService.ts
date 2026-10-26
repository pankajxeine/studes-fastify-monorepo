import type { CommissionLedgerRequest } from './types/CommissionLedgerRequest'
import type { CommissionLedgerUpdateRequest } from './types/CommissionLedgerUpdateRequest'
import type { CommissionLedgerResponse } from './types/CommissionLedgerResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { CommissionLedgerController } from './CommissionLedgerController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class CommissionLedgerService implements CommissionLedgerController {
      public async listCommissionLedger(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CommissionLedgerResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_ledger.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<CommissionLedgerResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createCommissionLedger(app: FastifyInstance, input: CommissionLedgerRequest, request?: FastifyRequest): Promise<CommissionLedgerResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_ledger.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<CommissionLedgerResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCommissionLedgerById(app: FastifyInstance, request?: FastifyRequest): Promise<CommissionLedgerResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_ledger.schema(schema!);
      const { entry_id } = (request?.params ?? {}) as { entry_id?: string | number }
      if (entry_id === undefined || entry_id === '') throw httpError(400, 'entry_id is required')
      const row = await model.findByPk(entry_id)
      if (!row) {
        throw httpError(404, 'commission_commission_ledger not found')
      }
      return toApiAttributes<CommissionLedgerResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCommissionLedger(app: FastifyInstance, input: CommissionLedgerUpdateRequest, request?: FastifyRequest): Promise<CommissionLedgerResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_ledger.schema(schema!);
      const { entry_id } = (request?.params ?? {}) as { entry_id?: string | number }
      if (entry_id === undefined || entry_id === '') throw httpError(400, 'entry_id is required')
      const row = await model.findByPk(entry_id)
      if (!row) {
        throw httpError(404, 'commission_commission_ledger not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<CommissionLedgerResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCommissionLedger(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_ledger.schema(schema!);
      const { entry_id } = (request?.params ?? {}) as { entry_id?: string | number }
      if (entry_id === undefined || entry_id === '') throw httpError(400, 'entry_id is required')
      const deletedCount = await model.destroy({ where: { entryId: entry_id } })
      if (deletedCount === 0) throw httpError(404, 'commission_commission_ledger not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
