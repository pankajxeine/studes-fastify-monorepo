import type { PlanItemRequest } from './types/PlanItemRequest'
import type { PlanItemUpdateRequest } from './types/PlanItemUpdateRequest'
import type { PlanItemResponse } from './types/PlanItemResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { PlanItemController } from './PlanItemController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class PlanItemService implements PlanItemController {
      public async listPlanItem(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlanItemResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan_item.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<PlanItemResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createPlanItem(app: FastifyInstance, input: PlanItemRequest, request?: FastifyRequest): Promise<PlanItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan_item.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<PlanItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPlanItemById(app: FastifyInstance, request?: FastifyRequest): Promise<PlanItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan_item.schema(schema!);
      const { plan_item_id } = (request?.params ?? {}) as { plan_item_id?: string | number }
      if (plan_item_id === undefined || plan_item_id === '') throw httpError(400, 'plan_item_id is required')
      const row = await model.findByPk(plan_item_id)
      if (!row) {
        throw httpError(404, 'commerce_plan_item not found')
      }
      return toApiAttributes<PlanItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePlanItem(app: FastifyInstance, input: PlanItemUpdateRequest, request?: FastifyRequest): Promise<PlanItemResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan_item.schema(schema!);
      const { plan_item_id } = (request?.params ?? {}) as { plan_item_id?: string | number }
      if (plan_item_id === undefined || plan_item_id === '') throw httpError(400, 'plan_item_id is required')
      const row = await model.findByPk(plan_item_id)
      if (!row) {
        throw httpError(404, 'commerce_plan_item not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<PlanItemResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePlanItem(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan_item.schema(schema!);
      const { plan_item_id } = (request?.params ?? {}) as { plan_item_id?: string | number }
      if (plan_item_id === undefined || plan_item_id === '') throw httpError(400, 'plan_item_id is required')
      const deletedCount = await model.destroy({ where: { planItemId: plan_item_id } })
      if (deletedCount === 0) throw httpError(404, 'commerce_plan_item not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
