import type { DunningStepRequest } from './types/DunningStepRequest'
import type { DunningStepUpdateRequest } from './types/DunningStepUpdateRequest'
import type { DunningStepResponse } from './types/DunningStepResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { DunningStepController } from './DunningStepController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class DunningStepService implements DunningStepController {
      public async listDunningStep(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DunningStepResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_dunning_step.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<DunningStepResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createDunningStep(app: FastifyInstance, input: DunningStepRequest, request?: FastifyRequest): Promise<DunningStepResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_dunning_step.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<DunningStepResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getDunningStepById(app: FastifyInstance, request?: FastifyRequest): Promise<DunningStepResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_dunning_step.schema(schema!);
      const { dunning_step_id } = (request?.params ?? {}) as { dunning_step_id?: string | number }
      if (dunning_step_id === undefined || dunning_step_id === '') throw httpError(400, 'dunning_step_id is required')
      const row = await model.findByPk(dunning_step_id)
      if (!row) {
        throw httpError(404, 'billing_dunning_step not found')
      }
      return toApiAttributes<DunningStepResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateDunningStep(app: FastifyInstance, input: DunningStepUpdateRequest, request?: FastifyRequest): Promise<DunningStepResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_dunning_step.schema(schema!);
      const { dunning_step_id } = (request?.params ?? {}) as { dunning_step_id?: string | number }
      if (dunning_step_id === undefined || dunning_step_id === '') throw httpError(400, 'dunning_step_id is required')
      const row = await model.findByPk(dunning_step_id)
      if (!row) {
        throw httpError(404, 'billing_dunning_step not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<DunningStepResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteDunningStep(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_dunning_step.schema(schema!);
      const { dunning_step_id } = (request?.params ?? {}) as { dunning_step_id?: string | number }
      if (dunning_step_id === undefined || dunning_step_id === '') throw httpError(400, 'dunning_step_id is required')
      const deletedCount = await model.destroy({ where: { dunningStepId: dunning_step_id } })
      if (deletedCount === 0) throw httpError(404, 'billing_dunning_step not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
