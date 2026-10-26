import type { CommissionPlanRequest } from './types/CommissionPlanRequest'
import type { CommissionPlanUpdateRequest } from './types/CommissionPlanUpdateRequest'
import type { CommissionPlanResponse } from './types/CommissionPlanResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { CommissionPlanController } from './CommissionPlanController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class CommissionPlanService implements CommissionPlanController {
      public async listCommissionPlan(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<CommissionPlanResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_plan.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<CommissionPlanResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createCommissionPlan(app: FastifyInstance, input: CommissionPlanRequest, request?: FastifyRequest): Promise<CommissionPlanResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_plan.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<CommissionPlanResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getCommissionPlanById(app: FastifyInstance, request?: FastifyRequest): Promise<CommissionPlanResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_plan.schema(schema!);
      const { commission_plan_id } = (request?.params ?? {}) as { commission_plan_id?: string | number }
      if (commission_plan_id === undefined || commission_plan_id === '') throw httpError(400, 'commission_plan_id is required')
      const row = await model.findByPk(commission_plan_id)
      if (!row) {
        throw httpError(404, 'commission_commission_plan not found')
      }
      return toApiAttributes<CommissionPlanResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateCommissionPlan(app: FastifyInstance, input: CommissionPlanUpdateRequest, request?: FastifyRequest): Promise<CommissionPlanResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_plan.schema(schema!);
      const { commission_plan_id } = (request?.params ?? {}) as { commission_plan_id?: string | number }
      if (commission_plan_id === undefined || commission_plan_id === '') throw httpError(400, 'commission_plan_id is required')
      const row = await model.findByPk(commission_plan_id)
      if (!row) {
        throw httpError(404, 'commission_commission_plan not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<CommissionPlanResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteCommissionPlan(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commission_commission_plan.schema(schema!);
      const { commission_plan_id } = (request?.params ?? {}) as { commission_plan_id?: string | number }
      if (commission_plan_id === undefined || commission_plan_id === '') throw httpError(400, 'commission_plan_id is required')
      const deletedCount = await model.destroy({ where: { commissionPlanId: commission_plan_id } })
      if (deletedCount === 0) throw httpError(404, 'commission_commission_plan not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
