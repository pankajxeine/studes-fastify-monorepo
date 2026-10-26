import type { ChecklistItemRequest } from './types/ChecklistItemRequest'
import type { ChecklistItemUpdateRequest } from './types/ChecklistItemUpdateRequest'
import type { ChecklistItemResponse } from './types/ChecklistItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ChecklistItemController } from './ChecklistItemController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ChecklistItemService implements ChecklistItemController {
      public async listChecklistItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ChecklistItemResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_checklist_item.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ChecklistItemResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createChecklistItem(app: FastifyInstance, input: ChecklistItemRequest, request?: FastifyRequest): Promise<ChecklistItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_checklist_item.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ChecklistItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getChecklistItemById(app: FastifyInstance, request?: FastifyRequest): Promise<ChecklistItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_checklist_item.schema(schema!);
      const { checklist_item_id } = (request?.params ?? {}) as { checklist_item_id?: string | number }
      if (checklist_item_id === undefined || checklist_item_id === '') throw httpError(400, 'checklist_item_id is required')
      const row = await model.findByPk(checklist_item_id)
      if (!row) {
        throw httpError(404, 'onboarding_checklist_item not found')
      }
      return toApiAttributes<ChecklistItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateChecklistItem(app: FastifyInstance, input: ChecklistItemUpdateRequest, request?: FastifyRequest): Promise<ChecklistItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_checklist_item.schema(schema!);
      const { checklist_item_id } = (request?.params ?? {}) as { checklist_item_id?: string | number }
      if (checklist_item_id === undefined || checklist_item_id === '') throw httpError(400, 'checklist_item_id is required')
      const row = await model.findByPk(checklist_item_id)
      if (!row) {
        throw httpError(404, 'onboarding_checklist_item not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ChecklistItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteChecklistItem(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.onboarding_checklist_item.schema(schema!);
      const { checklist_item_id } = (request?.params ?? {}) as { checklist_item_id?: string | number }
      if (checklist_item_id === undefined || checklist_item_id === '') throw httpError(400, 'checklist_item_id is required')
      const deletedCount = await model.destroy({ where: { checklistItemId: checklist_item_id } })
      if (deletedCount === 0) throw httpError(404, 'onboarding_checklist_item not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
