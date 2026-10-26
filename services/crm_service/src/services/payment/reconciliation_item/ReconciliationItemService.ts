import type { ReconciliationItemRequest } from './types/ReconciliationItemRequest'
import type { ReconciliationItemUpdateRequest } from './types/ReconciliationItemUpdateRequest'
import type { ReconciliationItemResponse } from './types/ReconciliationItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ReconciliationItemController } from './ReconciliationItemController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ReconciliationItemService implements ReconciliationItemController {
      public async listReconciliationItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ReconciliationItemResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_reconciliation_item.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ReconciliationItemResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createReconciliationItem(app: FastifyInstance, input: ReconciliationItemRequest, request?: FastifyRequest): Promise<ReconciliationItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_reconciliation_item.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ReconciliationItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getReconciliationItemById(app: FastifyInstance, request?: FastifyRequest): Promise<ReconciliationItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_reconciliation_item.schema(schema!);
      const { reconciliation_item_id } = (request?.params ?? {}) as { reconciliation_item_id?: string | number }
      if (reconciliation_item_id === undefined || reconciliation_item_id === '') throw httpError(400, 'reconciliation_item_id is required')
      const row = await model.findByPk(reconciliation_item_id)
      if (!row) {
        throw httpError(404, 'payment_reconciliation_item not found')
      }
      return toApiAttributes<ReconciliationItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateReconciliationItem(app: FastifyInstance, input: ReconciliationItemUpdateRequest, request?: FastifyRequest): Promise<ReconciliationItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_reconciliation_item.schema(schema!);
      const { reconciliation_item_id } = (request?.params ?? {}) as { reconciliation_item_id?: string | number }
      if (reconciliation_item_id === undefined || reconciliation_item_id === '') throw httpError(400, 'reconciliation_item_id is required')
      const row = await model.findByPk(reconciliation_item_id)
      if (!row) {
        throw httpError(404, 'payment_reconciliation_item not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ReconciliationItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteReconciliationItem(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.payment_reconciliation_item.schema(schema!);
      const { reconciliation_item_id } = (request?.params ?? {}) as { reconciliation_item_id?: string | number }
      if (reconciliation_item_id === undefined || reconciliation_item_id === '') throw httpError(400, 'reconciliation_item_id is required')
      const deletedCount = await model.destroy({ where: { reconciliationItemId: reconciliation_item_id } })
      if (deletedCount === 0) throw httpError(404, 'payment_reconciliation_item not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
