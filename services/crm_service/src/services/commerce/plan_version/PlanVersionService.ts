import type { PlanVersionRequest } from './types/PlanVersionRequest'
import type { PlanVersionUpdateRequest } from './types/PlanVersionUpdateRequest'
import type { PlanVersionResponse } from './types/PlanVersionResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { PlanVersionController } from './PlanVersionController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class PlanVersionService implements PlanVersionController {
      public async listPlanVersion(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<PlanVersionResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan_version.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<PlanVersionResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createPlanVersion(app: FastifyInstance, input: PlanVersionRequest, request?: FastifyRequest): Promise<PlanVersionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan_version.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<PlanVersionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getPlanVersionById(app: FastifyInstance, request?: FastifyRequest): Promise<PlanVersionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan_version.schema(schema!);
      const { plan_version_id } = (request?.params ?? {}) as { plan_version_id?: string | number }
      if (plan_version_id === undefined || plan_version_id === '') throw httpError(400, 'plan_version_id is required')
      const row = await model.findByPk(plan_version_id)
      if (!row) {
        throw httpError(404, 'commerce_plan_version not found')
      }
      return toApiAttributes<PlanVersionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updatePlanVersion(app: FastifyInstance, input: PlanVersionUpdateRequest, request?: FastifyRequest): Promise<PlanVersionResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan_version.schema(schema!);
      const { plan_version_id } = (request?.params ?? {}) as { plan_version_id?: string | number }
      if (plan_version_id === undefined || plan_version_id === '') throw httpError(400, 'plan_version_id is required')
      const row = await model.findByPk(plan_version_id)
      if (!row) {
        throw httpError(404, 'commerce_plan_version not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<PlanVersionResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deletePlanVersion(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.commerce_plan_version.schema(schema!);
      const { plan_version_id } = (request?.params ?? {}) as { plan_version_id?: string | number }
      if (plan_version_id === undefined || plan_version_id === '') throw httpError(400, 'plan_version_id is required')
      const deletedCount = await model.destroy({ where: { planVersionId: plan_version_id } })
      if (deletedCount === 0) throw httpError(404, 'commerce_plan_version not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
