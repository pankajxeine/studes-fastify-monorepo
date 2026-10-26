import type { SlaTargetRequest } from './types/SlaTargetRequest'
import type { SlaTargetUpdateRequest } from './types/SlaTargetUpdateRequest'
import type { SlaTargetResponse } from './types/SlaTargetResponse'
import type { FastifyInstance, FastifyRequest } from 'fastify'
import type { SlaTargetController } from './SlaTargetController'
import type { ListItem, PaginatedResponse } from '../../../types/PaginatedResponse'

import { verifyDbSchema, verifyDbModel } from '../../../core/helper/db_utils'
import {toApiAttributes } from '../../../core/helper/api_helper';

import { toModelAttributes } from '../../../core/helper/api_helper';

function httpError(statusCode: number, message: string): Error & { statusCode: number } {
  return Object.assign(new Error(message), { statusCode })
}


export class SlaTargetService implements SlaTargetController {
      public async listSlaTarget(app: FastifyInstance, request?: FastifyRequest): Promise<PaginatedResponse<ListItem<SlaTargetResponse[]>>> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_sla_target.schema(schema!);
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
        data: rows.map((row) => toApiAttributes<ListItem<SlaTargetResponse[]>>(row.get({ plain: true }) as Record<string, unknown>)),
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

      public async createSlaTarget(app: FastifyInstance, input: SlaTargetRequest, request?: FastifyRequest): Promise<SlaTargetResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_sla_target.schema(schema!);
      const row = await model.create(toModelAttributes(input) as any)
      return toApiAttributes<SlaTargetResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async getSlaTargetById(app: FastifyInstance, request?: FastifyRequest): Promise<SlaTargetResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_sla_target.schema(schema!);
      const { sla_target_id } = (request?.params ?? {}) as { sla_target_id?: string | number }
      if (sla_target_id === undefined || sla_target_id === '') throw httpError(400, 'sla_target_id is required')
      const row = await model.findByPk(sla_target_id)
      if (!row) {
        throw httpError(404, 'support_sla_target not found')
      }
      return toApiAttributes<SlaTargetResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async updateSlaTarget(app: FastifyInstance, input: SlaTargetUpdateRequest, request?: FastifyRequest): Promise<SlaTargetResponse> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_sla_target.schema(schema!);
      const { sla_target_id } = (request?.params ?? {}) as { sla_target_id?: string | number }
      if (sla_target_id === undefined || sla_target_id === '') throw httpError(400, 'sla_target_id is required')
      const row = await model.findByPk(sla_target_id)
      if (!row) {
        throw httpError(404, 'support_sla_target not found')
      }
      await row.update(toModelAttributes(input) as any)
      return toApiAttributes<SlaTargetResponse>(row.get({ plain: true }) as Record<string, unknown>)
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

      public async deleteSlaTarget(app: FastifyInstance, request?: FastifyRequest): Promise<void> {
    try {
      // tenant schema comes from request context
      const schema = request?.dbSchema;
      verifyDbSchema(schema)
      // bind model to tenant schema
      const models = app.models;
      verifyDbModel(models);
      const model = models.support_sla_target.schema(schema!);
      const { sla_target_id } = (request?.params ?? {}) as { sla_target_id?: string | number }
      if (sla_target_id === undefined || sla_target_id === '') throw httpError(400, 'sla_target_id is required')
      const deletedCount = await model.destroy({ where: { slaTargetId: sla_target_id } })
      if (deletedCount === 0) throw httpError(404, 'support_sla_target not found')
      return
    } catch (err) {
      app.log.error(err);
      throw err;
    }
  }

}
