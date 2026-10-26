import type { DunningRunRequest } from './types/DunningRunRequest'
import type { DunningRunUpdateRequest } from './types/DunningRunUpdateRequest'
import type { DunningRunResponse } from './types/DunningRunResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { DunningRunController } from './DunningRunController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class DunningRunService implements DunningRunController {
      public async listDunningRun(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<DunningRunResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_dunning_run.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<DunningRunResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createDunningRun(app: FastifyInstance, input: DunningRunRequest, request?: FastifyRequest): Promise<DunningRunResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_dunning_run.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<DunningRunResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getDunningRunById(app: FastifyInstance, request?: FastifyRequest): Promise<DunningRunResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_dunning_run.schema(schema!);
      const { dunning_run_id } = (request?.params ?? {}) as { dunning_run_id?: string | number }
      if (dunning_run_id === undefined || dunning_run_id === '') throw httpError(400, 'dunning_run_id is required')
      const row = await model.findByPk(dunning_run_id)
      if (!row) {
        throw httpError(404, 'billing_dunning_run not found')
      }
      return toApiAttributes<DunningRunResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateDunningRun(app: FastifyInstance, input: DunningRunUpdateRequest, request?: FastifyRequest): Promise<DunningRunResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_dunning_run.schema(schema!);
      const { dunning_run_id } = (request?.params ?? {}) as { dunning_run_id?: string | number }
      if (dunning_run_id === undefined || dunning_run_id === '') throw httpError(400, 'dunning_run_id is required')
      const row = await model.findByPk(dunning_run_id)
      if (!row) {
        throw httpError(404, 'billing_dunning_run not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<DunningRunResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteDunningRun(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.billing_dunning_run.schema(schema!);
      const { dunning_run_id } = (request?.params ?? {}) as { dunning_run_id?: string | number }
      if (dunning_run_id === undefined || dunning_run_id === '') throw httpError(400, 'dunning_run_id is required')
      const deletedCount = await model.destroy({ where: { dunningRunId: dunning_run_id } })
      if (deletedCount === 0) throw httpError(404, 'billing_dunning_run not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
