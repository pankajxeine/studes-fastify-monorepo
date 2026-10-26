import type { ReconciliationBatchRequest } from './types/ReconciliationBatchRequest'
import type { ReconciliationBatchUpdateRequest } from './types/ReconciliationBatchUpdateRequest'
import type { ReconciliationBatchResponse } from './types/ReconciliationBatchResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ReconciliationBatchController } from './ReconciliationBatchController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ReconciliationBatchService implements ReconciliationBatchController {
      public async listReconciliationBatch(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ReconciliationBatchResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_reconciliation_batch.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ReconciliationBatchResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createReconciliationBatch(app: FastifyInstance, input: ReconciliationBatchRequest, request?: FastifyRequest): Promise<ReconciliationBatchResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_reconciliation_batch.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ReconciliationBatchResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getReconciliationBatchById(app: FastifyInstance, request?: FastifyRequest): Promise<ReconciliationBatchResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_reconciliation_batch.schema(schema!);
      const { reconciliation_batch_id } = (request?.params ?? {}) as { reconciliation_batch_id?: string | number }
      if (reconciliation_batch_id === undefined || reconciliation_batch_id === '') throw httpError(400, 'reconciliation_batch_id is required')
      const row = await model.findByPk(reconciliation_batch_id)
      if (!row) {
        throw httpError(404, 'payment_reconciliation_batch not found')
      }
      return toApiAttributes<ReconciliationBatchResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateReconciliationBatch(app: FastifyInstance, input: ReconciliationBatchUpdateRequest, request?: FastifyRequest): Promise<ReconciliationBatchResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_reconciliation_batch.schema(schema!);
      const { reconciliation_batch_id } = (request?.params ?? {}) as { reconciliation_batch_id?: string | number }
      if (reconciliation_batch_id === undefined || reconciliation_batch_id === '') throw httpError(400, 'reconciliation_batch_id is required')
      const row = await model.findByPk(reconciliation_batch_id)
      if (!row) {
        throw httpError(404, 'payment_reconciliation_batch not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ReconciliationBatchResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteReconciliationBatch(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_reconciliation_batch.schema(schema!);
      const { reconciliation_batch_id } = (request?.params ?? {}) as { reconciliation_batch_id?: string | number }
      if (reconciliation_batch_id === undefined || reconciliation_batch_id === '') throw httpError(400, 'reconciliation_batch_id is required')
      const deletedCount = await model.destroy({ where: { reconciliationBatchId: reconciliation_batch_id } })
      if (deletedCount === 0) throw httpError(404, 'payment_reconciliation_batch not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
