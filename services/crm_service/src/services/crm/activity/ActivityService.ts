import type { ActivityRequest } from './types/ActivityRequest'
import type { ActivityUpdateRequest } from './types/ActivityUpdateRequest'
import type { ActivityResponse } from './types/ActivityResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { ActivityController } from './ActivityController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class ActivityService implements ActivityController {
      public async listActivity(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<ActivityResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_activity.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<ActivityResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createActivity(app: FastifyInstance, input: ActivityRequest, request?: FastifyRequest): Promise<ActivityResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_activity.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<ActivityResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getActivityById(app: FastifyInstance, request?: FastifyRequest): Promise<ActivityResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_activity.schema(schema!);
      const { activity_id } = (request?.params ?? {}) as { activity_id?: string | number }
      if (activity_id === undefined || activity_id === '') throw httpError(400, 'activity_id is required')
      const row = await model.findByPk(activity_id)
      if (!row) {
        throw httpError(404, 'crm_activity not found')
      }
      return toApiAttributes<ActivityResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateActivity(app: FastifyInstance, input: ActivityUpdateRequest, request?: FastifyRequest): Promise<ActivityResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_activity.schema(schema!);
      const { activity_id } = (request?.params ?? {}) as { activity_id?: string | number }
      if (activity_id === undefined || activity_id === '') throw httpError(400, 'activity_id is required')
      const row = await model.findByPk(activity_id)
      if (!row) {
        throw httpError(404, 'crm_activity not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<ActivityResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteActivity(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.crm_activity.schema(schema!);
      const { activity_id } = (request?.params ?? {}) as { activity_id?: string | number }
      if (activity_id === undefined || activity_id === '') throw httpError(400, 'activity_id is required')
      const deletedCount = await model.destroy({ where: { activityId: activity_id } })
      if (deletedCount === 0) throw httpError(404, 'crm_activity not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
