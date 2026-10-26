import type { PlanRequest } from './types/PlanRequest'
import type { PlanUpdateRequest } from './types/PlanUpdateRequest'
import type { PlanResponse } from './types/PlanResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { PlanController } from './PlanController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class PlanService implements PlanController {
      public async listPlan(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlanResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<PlanResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createPlan(app: FastifyInstance, input: PlanRequest, request?: FastifyRequest): Promise<PlanResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<PlanResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPlanById(app: FastifyInstance, request?: FastifyRequest): Promise<PlanResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan.schema(schema!);
      const { plan_id } = (request?.params ?? {}) as { plan_id?: string | number }
      if (plan_id === undefined || plan_id === '') throw httpError(400, 'plan_id is required')
      const row = await model.findByPk(plan_id)
      if (!row) {
        throw httpError(404, 'commerce_plan not found')
      }
      return toApiAttributes<PlanResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePlan(app: FastifyInstance, input: PlanUpdateRequest, request?: FastifyRequest): Promise<PlanResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan.schema(schema!);
      const { plan_id } = (request?.params ?? {}) as { plan_id?: string | number }
      if (plan_id === undefined || plan_id === '') throw httpError(400, 'plan_id is required')
      const row = await model.findByPk(plan_id)
      if (!row) {
        throw httpError(404, 'commerce_plan not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<PlanResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePlan(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan.schema(schema!);
      const { plan_id } = (request?.params ?? {}) as { plan_id?: string | number }
      if (plan_id === undefined || plan_id === '') throw httpError(400, 'plan_id is required')
      const deletedCount = await model.destroy({ where: { planId: plan_id } })
      if (deletedCount === 0) throw httpError(404, 'commerce_plan not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
